import { useEffect, useState } from "react";
import { useWeb3Context } from "../context";
import { useAddress } from "@thirdweb-dev/react";

const PurchaseHistory = () => {
  console.log("Heloooooooooo");
  const address = useAddress();
  console.log(address);
  const [history, setHistory] = useState([]);
  const { contract, getAggrements, getListedItemsById } = useWeb3Context();
  function getWordByIndex(index) {
    const words = [
      "requested",
      "rejected",
      "dispatched",
      "transected",
      "reverted"
    ];
    return words[index];
  }
  useEffect(() => {
    const fetchHistory = async () => {
      let hist = await getAggrements();
      hist = hist.filter((aggrement) => aggrement[0] === address);
      //   hist.map(async (aggrement) => {
      //     const item = await getListedItemsById(parseInt(aggrement[3]._hex));
      //   });
      console.log(hist);
      setHistory(hist);
    };
    if (contract) {
      fetchHistory();
    }
  }, [contract]);

  return (
    <div className="bg-[#0D0D0D] flex ">
      <div className="flex flex-col p-10 max-w-[1800px] mx-auto justify-center">
        <h1 className="text-3xl py-4 mb-10 border-b border-gray-700">
          Purchasing History
        </h1>

        <div className="bg-[#201F2D]  rounded-lg shadow-lg">
          <table className="table-auto w-[430px] lg:w-[1000px] rounded-md border border-[#242424] text-[#E4E4E4]">
            <thead>
              <tr>
                <th className="px-4 py-2 border border-[#3a3939]">
                  Agreement Id
                </th>
                <th className="px-4 py-2 border border-[#3a3939]">Merchant</th>
                <th className="px-4 py-2 border border-[#3a3939]">
                  Product Id
                </th>
                <th className="px-4 py-2 border border-[#3a3939]">Price</th>
                <th className="px-4 py-2 border border-[#3a3939]">Status</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item) => (
                <tr key={parseInt(item[5])}>
                  <td className="px-4 py-2 border border-[#3a3939]">
                    {parseInt(item[5])}
                  </td>
                  <td className="px-4 py-2 border border-[#3a3939]">
                    {item[1]}
                  </td>
                  <td className="px-4 py-2 border border-[#3a3939]">
                    {parseInt(item[3])}
                  </td>
                  <td className="px-4 py-2 border border-[#3a3939]">
                    {parseInt(item[2])}
                  </td>
                  <td className="px-4 py-2 border border-[#3a3939]">
                    {getWordByIndex(item[4])}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PurchaseHistory;
