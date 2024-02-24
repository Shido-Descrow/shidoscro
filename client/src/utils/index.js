export const ABI = [
    {
      "type": "constructor",
      "name": "",
      "inputs": [
        {
          "type": "address",
          "name": "_server",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "PRODUCTLISTED",
      "inputs": [
        {
          "type": "string",
          "name": "itemName",
          "indexed": false,
          "internalType": "string"
        },
        {
          "type": "string",
          "name": "description",
          "indexed": false,
          "internalType": "string"
        },
        {
          "type": "string",
          "name": "imageData",
          "indexed": false,
          "internalType": "string"
        },
        {
          "type": "address",
          "name": "listerMerchant",
          "indexed": false,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "price",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "ProductId",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "SERVERCONFIRMDELIVERY",
      "inputs": [
        {
          "type": "uint256",
          "name": "aggrementId",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "type": "string",
          "name": "message",
          "indexed": false,
          "internalType": "string"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "SERVERREVERTEDDELIVERY",
      "inputs": [
        {
          "type": "uint256",
          "name": "aggrementId",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "type": "string",
          "name": "revertMessage",
          "indexed": false,
          "internalType": "string"
        },
        {
          "type": "bytes",
          "name": "revertTxnData",
          "indexed": false,
          "internalType": "bytes"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "TRASACTIONFULLFILLED",
      "inputs": [
        {
          "type": "uint256",
          "name": "aggrementId",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "type": "bytes",
          "name": "txnData",
          "indexed": false,
          "internalType": "bytes"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "function",
      "name": "approveAggrement",
      "inputs": [
        {
          "type": "uint256",
          "name": "_aggrementId",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "buyProductAsUser",
      "inputs": [
        {
          "type": "uint256",
          "name": "_itemId",
          "internalType": "uint256"
        },
        {
          "type": "address",
          "name": "merchantAddress",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "confirmDellivery",
      "inputs": [
        {
          "type": "uint256",
          "name": "_aggrementId",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "getAggremnts",
      "inputs": [],
      "outputs": [
        {
          "type": "tuple[]",
          "name": "",
          "components": [
            {
              "type": "address",
              "name": "applicant",
              "internalType": "address"
            },
            {
              "type": "address",
              "name": "fullfiller",
              "internalType": "address"
            },
            {
              "type": "uint256",
              "name": "price",
              "internalType": "uint256"
            },
            {
              "type": "uint256",
              "name": "item_id",
              "internalType": "uint256"
            },
            {
              "type": "uint8",
              "name": "status",
              "internalType": "enum MyContract.ItemState"
            },
            {
              "type": "uint256",
              "name": "aggrementId",
              "internalType": "uint256"
            }
          ],
          "internalType": "struct MyContract.PRODUCT_AGGREMENT[]"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getAggremntsById",
      "inputs": [
        {
          "type": "uint256",
          "name": "_id",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "tuple",
          "name": "",
          "components": [
            {
              "type": "address",
              "name": "applicant",
              "internalType": "address"
            },
            {
              "type": "address",
              "name": "fullfiller",
              "internalType": "address"
            },
            {
              "type": "uint256",
              "name": "price",
              "internalType": "uint256"
            },
            {
              "type": "uint256",
              "name": "item_id",
              "internalType": "uint256"
            },
            {
              "type": "uint8",
              "name": "status",
              "internalType": "enum MyContract.ItemState"
            },
            {
              "type": "uint256",
              "name": "aggrementId",
              "internalType": "uint256"
            }
          ],
          "internalType": "struct MyContract.PRODUCT_AGGREMENT"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "listProductAsMerchant",
      "inputs": [
        {
          "type": "string",
          "name": "productName",
          "internalType": "string"
        },
        {
          "type": "uint256",
          "name": "productId",
          "internalType": "uint256"
        },
        {
          "type": "string",
          "name": "imageData",
          "internalType": "string"
        },
        {
          "type": "string",
          "name": "_description",
          "internalType": "string"
        },
        {
          "type": "uint256",
          "name": "_price",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "listedItemById",
      "inputs": [
        {
          "type": "uint256",
          "name": "_id",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "tuple",
          "name": "",
          "components": [
            {
              "type": "string",
              "name": "item_name",
              "internalType": "string"
            },
            {
              "type": "string",
              "name": "description",
              "internalType": "string"
            },
            {
              "type": "string",
              "name": "image_data",
              "internalType": "string"
            },
            {
              "type": "address",
              "name": "merchant_add",
              "internalType": "address"
            },
            {
              "type": "uint256",
              "name": "price",
              "internalType": "uint256"
            },
            {
              "type": "uint256",
              "name": "itemId",
              "internalType": "uint256"
            }
          ],
          "internalType": "struct MyContract.ITEM_DETAIL"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "listedItems",
      "inputs": [],
      "outputs": [
        {
          "type": "tuple[]",
          "name": "",
          "components": [
            {
              "type": "string",
              "name": "item_name",
              "internalType": "string"
            },
            {
              "type": "string",
              "name": "description",
              "internalType": "string"
            },
            {
              "type": "string",
              "name": "image_data",
              "internalType": "string"
            },
            {
              "type": "address",
              "name": "merchant_add",
              "internalType": "address"
            },
            {
              "type": "uint256",
              "name": "price",
              "internalType": "uint256"
            },
            {
              "type": "uint256",
              "name": "itemId",
              "internalType": "uint256"
            }
          ],
          "internalType": "struct MyContract.ITEM_DETAIL[]"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "rejectAggrement",
      "inputs": [
        {
          "type": "uint256",
          "name": "_aggrementId",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "rejectDelivery",
      "inputs": [
        {
          "type": "uint256",
          "name": "_aggrementId",
          "internalType": "uint256"
        },
        {
          "type": "string",
          "name": "revertMessage",
          "internalType": "string"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "server",
      "inputs": [],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    }
  ];