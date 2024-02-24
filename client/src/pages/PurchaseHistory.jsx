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
    const words = ['requested', 'rejected', 'dispatched', 'transected', 'reverted'];
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
    <div className="bg-[#0D0D0D] h-screen flex items-center justify-center">

<div className="flex justify-center">
  <div className="bg-[#201F2D] p-8 rounded-lg shadow-lg">
    <table className="table-auto border border-[#5f5f5f] text-[#E4E4E4]">
      <thead>
        <tr>
          <th className="px-4 py-2 border border-[#5f5f5f]">Agreement Id</th>
          <th className="px-4 py-2 border border-[#5f5f5f]">Merchant</th>
          <th className="px-4 py-2 border border-[#5f5f5f]">Product Id</th>
          <th className="px-4 py-2 border border-[#5f5f5f]">Price</th>
          <th className="px-4 py-2 border border-[#5f5f5f]">Status</th>
        </tr>
      </thead>
      <tbody>
        {history.map((item) => (
        <tr key={parseInt(item[5])}>
          <td className="px-4 py-2 border border-[#5f5f5f]">{parseInt(item[5])}</td>
          <td className="px-4 py-2 border border-[#5f5f5f]">{item[1]}</td>
          <td className="px-4 py-2 border border-[#5f5f5f]">{parseInt(item[3])}</td>
          <td className="px-4 py-2 border border-[#5f5f5f]">{parseInt(item[2])}</td>
          <td className="px-4 py-2 border border-[#5f5f5f]">{getWordByIndex(item[4])}</td>
        </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
</div>





  );
};

export default PurchaseHistory