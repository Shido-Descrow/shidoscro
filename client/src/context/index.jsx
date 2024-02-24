import React, { useContext, createContext, useState, useEffect } from "react";
import { useContract, useAddress } from "@thirdweb-dev/react";

import { ABI } from "../utils";
const StateContext = createContext();

export function Web3ContextProvider({ children }) {
  //I dont think we would be needing this for now...
  const [Loading, setLoading] = useState(false);
  const { contract } = useContract(
    "0x74bc67C463dd2f362CEfd12182A4114B48a6F39b"
  );

  //write calls.
  const MerchentApproveAggrement = async (_aggrementId) => {
    try {
      const data = await contract.call("approveAggrement", [_aggrementId]);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
  const UserCreateAggrement = async (_itemId, merchantAddress, valueInETH) => {
    try {
      const data = await contract.call(
        "buyProductAsUser",
        [_itemId, merchantAddress],
        { value: valueInETH }
      );
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
  const MerchantListProduct = async (
    productName,
    productId,
    imageData,
    _description,
    _price
  ) => {
    try {
      const data = await contract.call("listProductAsMerchant", [
        productName,
        productId,
        imageData,
        _description,
        _price,
      ]);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
  const MerchentRejectAgrement = async (_aggrementId) => {
    try {
      const data = await contract.call("rejectAggrement", [_aggrementId]);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
  // read calls...
  const getAggrements = async () => {
    try {
      const data = await contract.call("getAggremnts", []);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  const getAggrementById = async (_id) => {
    try {
      const data = await contract.call("getAggremntsById", [_id]);
      return data;
    } catch (err) {
      console.error(err);
    }
  };
  const getListedItems = async () => {
    try {
      const data = await contract.call("listedItems", []);
      return data;
    } catch (err) {
      console.error(err);
    }
  };
  const getListedItemsById = async (_id) => {
    try {
      const data = await contract.call("listedItemById", [_id]);
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try{
  //       if(contract!=undefined && address!= undefined){
  //         const [ UserName, UserProfile ]= await contract.call("getUserName", [address]);
  //         setUserName(UserName);
  //         setUserProfile(UserProfile);
  //         const FriendList = await contract.call("getMyFriendList", [address]);
  //         setFriendLists(FriendList);
  //         const AllUsers = await contract.call("fetchAllUsers", [])
  //         setAllUsers(AllUsers);
  //       }
  //     }
  //     catch(err){
  //       console.log(err);
  //       setError("Try Connecting your Account

  return (
    <StateContext.Provider
      value={{
        MerchentApproveAggrement,
        UserCreateAggrement,
        MerchantListProduct,
        MerchentRejectAgrement,

        getAggrements,
        getAggrementById,
        getListedItems,
        getListedItemsById,

        contract,
        Loading,
        setLoading,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export const useWeb3Context = () => {
  return useContext(StateContext);
};
