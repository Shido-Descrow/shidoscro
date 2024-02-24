import React from "react";
import { useWeb3Context } from "../context";
import { useAddress } from "@thirdweb-dev/react";
export default function RowDiscription({ item, fetchAgrements }) {
  const address = useAddress()
  console.log(item);

  const {
    contract,
    MerchentApproveAggrement,
    MerchentRejectAgrement,
    setLoading,
  } = useWeb3Context();
  const shorten = (str) => {
    return str.slice(0, 4) + "..." + str.slice(-7);
  };
  const acceptRequest = async () => {
    setLoading(true);
    const data = await MerchentApproveAggrement(
      parseInt(item.aggrementId._hex)
    );
    setLoading(false);
    console.log(data);
    fetchAgrements();
    alert("accepted");
    
    const res = await fetch("http://localhost:3000/orders/", {
      method: "POST",
      body: JSON.stringify({
        orderDate: new Date(),
        productId: parseInt(item[3]._hex),
        merchantId: item[1],
        status: 2,
        buyerId: address,
        agreementId:parseInt(item[5]._hex),
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(res);
  };
  const rejectRequest = async () => {
    setLoading(true);
    const data = await MerchentRejectAgrement(parseInt(item.aggrementId._hex));
    setLoading(false);
    fetchAgrements();
    alert("rejected");
  };
  return (
    <>
      <div className="text-[#a6a5a5] flex justify-between p-2 px-4 border-2 rounded border-[#656464]">
        <div className="flex gap-3">
          <div className="w-[15px] justify-end flex">
            <p>{parseInt(item.aggrementId._hex)}</p>
          </div>
          <div>
            <p>{shorten(item.applicant)}</p>
          </div>
          <div>
            <p>{parseInt(item.item_id._hex)}</p>
          </div>
          <div>
            <p>{parseInt(item.price._hex) / 1e18}</p>
          </div>
        </div>
        <div>
          {item.status == 0 && (
            <div className="flex gap-3">
              <button
                onClick={() => {
                  acceptRequest();
                }}
                className="border-2 rounded px-2 p-1 border-[#59d7cc]"
              >
                Ship now
              </button>
              <button
                onClick={() => {
                  rejectRequest();
                }}
                className="border-2 rounded px-2 p-1 border-[#d75959]"
              >
                Reject
              </button>
            </div>
          )}
          {item.status == 1 && (
            <div className="flex gap-3">
              <spam className=" rounded px-2 p-1 bg-[#a9553c] text-white font-bold">
                Rejected
              </spam>
            </div>
          )}
          {item.status == 2 && (
            <div className="flex gap-3">
              <spam className=" rounded px-2 p-1 bg-[#267f64] text-white font-bold">
                ⏳ Wait till Update
              </spam>
            </div>
          )}
          {item.status == 3 && (
            <div className="flex gap-3">
              <spam className=" rounded px-2 p-1 border-2 border-[#267f64] text-white font-bold">
                ✔️ Transited
              </spam>
            </div>
          )}
          {item.status == 4 && (
            <div className="flex gap-3">
              <spam className=" rounded px-2 p-1 border-2 border-[#267f64] text-white font-bold">
                ➿ Reverted
              </spam>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
