import React, { useState, useEffect } from "react";
import { useWeb3Context } from "../context";
import { useAddress } from "@thirdweb-dev/react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

import RowDiscription from "./RowDiscription";

export default function Dashboard() {
  const [myListedItem, setmyListedItem] = useState();
  const [aggrements, setAgrements] = useState();
  const [toShow, setToShow] = useState();
  const { contract, getListedItems, getAggrements } = useWeb3Context();
  const [sortType, setSortType] = useState(9); // 0- un fulfiled/under, 1- show reverted, 2 pyment done, 3 new item
  const navigate = useNavigate();
  const address = useAddress();
  console.log(myListedItem);
  const fetchLIstItems = async () => {
    const data = await getListedItems();
    console.log(data);
    const filtered = data.filter((item) => item.merchant_add == address);
    console.log(filtered);
    setmyListedItem(filtered);
  };
  const fetchAgrements = async () => {
    const data = await getAggrements();
    const filtered = data.filter((item) => item[1] == address);
    console.log(filtered);
    setAgrements(filtered);
  };
  useEffect(() => {
    if (contract && address) {
      fetchLIstItems();
      fetchAgrements();
    }
  }, [contract, address]);
  useEffect(() => {
    if (!aggrements) return;

    switch (sortType) {
      case 0:
        setToShow(aggrements.filter((item) => item.status == 2));
        break;
      case 1:
        setToShow(aggrements.filter((item) => item.status == 4));
        break;
      case 2:
        setToShow(aggrements.filter((item) => item.status == 3));
        break;
      case 3:
        setToShow(aggrements.filter((item) => item.status == 0));
        break;
      case 4:
        setToShow(aggrements.filter((item) => item.status == 1));
        break;
      default:
        setToShow(aggrements.filter((item) => item.status != 1));
    }
    //filtering... it
  }, [aggrements, sortType]);
  console.log(toShow);
  return (
    <>
      <div className="bg-[#0D0D0D] h-screen flex  items-center justify-center">
        <div className="xl:w-[80%] h-screen flex max-lg:flex-col gap-5 text-[#E4E4E4]">
          <div className="bg-[#201F2D] m-3 w-[70%] p-5 rounded-[20px]">
            <div className="flex p-3 justify-between">
              <p className="text-3xl">Transactions For You</p>
              <div className="flex gap-2 h-max">
                <button
                  className={`border-2 px-2 rounded ${
                    sortType == 9 ? "border-[#5ed5af]" : "border-[#5f5f5f]"
                  }`}
                  onClick={() => {
                    setSortType(9);
                  }}
                >
                  All
                </button>
                <button
                  className={`border-2 px-1 rounded ${
                    sortType == 3 ? "border-[#5ed5af]" : "border-[#5f5f5f]"
                  }`}
                  onClick={() => {
                    setSortType(3);
                    console.log("helo");
                  }}
                >
                  New Requests
                </button>
                <button
                  className={`border-2 px-1 rounded ${
                    sortType == 1 ? "border-[#5ed5af]" : "border-[#5f5f5f]"
                  }`}
                  onClick={() => setSortType(1)} //correct
                >
                  Reverted
                </button>
                <button
                  className={`border-2 px-1 rounded ${
                    sortType == 2 ? "border-[#5ed5af]" : "border-[#5f5f5f]"
                  }`}
                  onClick={() => setSortType(2)}
                >
                  Fullfiled
                </button>
                <button
                  className={`border-2 px-1 rounded ${
                    sortType == 0 ? "border-[#5ed5af]" : "border-[#5f5f5f]"
                  }`}
                  onClick={() => setSortType(0)}
                >
                  Undergoing
                </button>
                <button
                  className={`border-2 px-1 rounded ${
                    sortType == 4 ? "border-[#5ed5af]" : "border-[#5f5f5f]"
                  }`}
                  onClick={() => setSortType(4)}
                >
                  Rejected
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {toShow && toShow.length != 0 && (
                <>
                  {toShow.map((item, index) => (
                    <RowDiscription
                      fetchAgrements={fetchAgrements}
                      key={index}
                      item={item}
                    />
                  ))}
                </>
              )}
            </div>
          </div>

          <div className="bg-[#201F2D] m-3 p-5 w-[30%] rounded-[20px]">
            <p className="text-2xl">My Listed Items</p>
            <div className="flex gap-2 col-2">
              {myListedItem &&
                myListedItem.map((item, index) => (
                  <div key={index}>
                    <Card key={index} item={item} />
                  </div>
                ))}
            </div>
            <button
              className="rounded-md m-5 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => {
                navigate("/products/new");
              }}
            >
              List New Product
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
