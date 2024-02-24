// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract MyContract {

    address public server;
    enum ItemState{
        requested,
        rejected,
        dispatched,
        transected,
        reverted
    }
    struct ITEM_DETAIL{
        string item_name;
        string description;
        string image_data;
        address merchant_add;
        uint256 price;
        uint256 itemId;
    }
    struct PRODUCT_AGGREMENT{
        address applicant;
        address fullfiller;
        uint256 price;
        uint256 item_id;
        ItemState status;
        uint256 aggrementId;
    }
    //listed items....
    mapping(uint256 => ITEM_DETAIL) listedItemsMap;
    ITEM_DETAIL[] listeItemArray;
    uint256[] listItemKeyKeyset;
    
    //product requested...abi
    mapping(uint256 => PRODUCT_AGGREMENT) productAggrements;
    PRODUCT_AGGREMENT[] listedAggrements;
    uint256[] listedaggrementsKeySet;

    //events
    event PRODUCTLISTED(string itemName, string description, string imageData, address listerMerchant, uint256 price, uint256 ProductId);
    event TRASACTIONFULLFILLED(uint256 aggrementId, bytes txnData);
    event SERVERCONFIRMDELIVERY(uint256 aggrementId, string message);
    event SERVERREVERTEDDELIVERY(uint256 aggrementId, string revertMessage, bytes revertTxnData);

    constructor(address _server ) {
        server = _server;
    }

    modifier onlyServer() {
        require(msg.sender == server, "un-Authorised");
        _;
    }
    modifier onlyMerchent(uint256 _aggrementId){
        require(productAggrements[_aggrementId].applicant != address(0),"No such aggrement exist.");
        require( msg.sender == productAggrements[_aggrementId].fullfiller, "You don't have share in that specefic aggrement.");
        _;
    }

    function listProductAsMerchant(
        string memory productName,
        uint256 productId,
        string memory imageData,
        string memory _description,
        uint256 _price
    )public {
        require(_price > 0,"Price must be greater than zero");
        require(listedItemsMap[productId].itemId == 0, "Item_id allready in use");
        listedItemsMap[productId] = ITEM_DETAIL(productName, _description, imageData, msg.sender, _price, productId);
        listItemKeyKeyset.push(productId);
        listeItemArray.push(ITEM_DETAIL(productName, _description, imageData, msg.sender, _price, productId));
        emit PRODUCTLISTED(productName, _description, imageData, msg.sender, _price, productId);
    }

    function buyProductAsUser(
        uint256  _itemId,
        address merchantAddress

    ) public payable returns(uint256){
        uint256 price = listedItemsMap[_itemId].price;
        require(msg.value >= price , "Not enough value sent!");
        uint256 transactionId = listedaggrementsKeySet.length +1 ;
        listedAggrements.push(PRODUCT_AGGREMENT(msg.sender, merchantAddress, price, _itemId, ItemState.requested, transactionId));
        productAggrements[transactionId] = PRODUCT_AGGREMENT(msg.sender, merchantAddress, price, _itemId, ItemState.requested, transactionId);
        listedaggrementsKeySet.push(transactionId);
        return transactionId; 
    }

    function confirmDellivery( uint256  _aggrementId ) external onlyServer(){
        require(productAggrements[_aggrementId].aggrementId != 0, "invalid aggrement_Id");
        require(productAggrements[_aggrementId].status != ItemState.requested || productAggrements[_aggrementId].status != ItemState.rejected, "cant confirm this order, it is either cancelled or not accepted. ");
        
        (bool success, bytes memory txnData) = address(productAggrements[_aggrementId].fullfiller).call{value: productAggrements[_aggrementId].price}("");
        emit TRASACTIONFULLFILLED(_aggrementId, txnData);

        emit  SERVERCONFIRMDELIVERY(_aggrementId, "The deliery confirmed");
        require(success, "Failed to settel aggrement.");
        productAggrements[_aggrementId].status = ItemState.transected;
        listedAggrements[_aggrementId-1].status = ItemState.transected;
    }
    function rejectDelivery( uint256 _aggrementId, string memory revertMessage) external onlyServer(){
        require(productAggrements[_aggrementId].aggrementId != 0, "invalid aggrement_Id");
        require(productAggrements[_aggrementId].status != ItemState.requested || productAggrements[_aggrementId].status != ItemState.rejected, "cant confirm this order, it is either cancelled or not accepted. ");
        (bool success, bytes memory txnData) = address(productAggrements[_aggrementId].applicant).call{value: productAggrements[_aggrementId].price}("");
        emit SERVERREVERTEDDELIVERY(_aggrementId, revertMessage, txnData);
        require(success, "error in making txn");
        productAggrements[_aggrementId].status = ItemState.reverted;
        listedAggrements[_aggrementId-1].status = ItemState.reverted;
    }
    //merchant be the on verifyinh approving the aggremnt..
    function approveAggrement(uint256 _aggrementId)public onlyMerchent(_aggrementId){
        //stuff here..abi
        productAggrements[_aggrementId].status = ItemState.dispatched;
        listedAggrements[_aggrementId-1].status = ItemState.dispatched;
        //updated the status.. 
    }
    function rejectAggrement(uint256 _aggrementId)public onlyMerchent(_aggrementId){
        //stuff here..abi
        productAggrements[_aggrementId].status = ItemState.reverted;
        listedAggrements[_aggrementId-1].status = ItemState.reverted;
        //updated the status.. 
    }


    //read function...abi
    function getAggremnts()public view returns(PRODUCT_AGGREMENT[] memory){
        return listedAggrements;
    }
    function getAggremntsById(uint256 _id)public view returns(PRODUCT_AGGREMENT memory){
        return productAggrements[_id];
    }
    function listedItems() public view returns(ITEM_DETAIL[] memory){
        return listeItemArray;
    }
    function listedItemById(uint256 _id) public view returns(ITEM_DETAIL memory){
        return listedItemsMap[_id];
    }
}