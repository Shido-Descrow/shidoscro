import React from "react";

export default function Card({ item }) {
  return (
    <>
      <div
        className=" border-2 rounded h-[120px] cursor-pointer"
        onClick={() => {
          //navigate to link..
          // :/dashboard/listed/:id, id == parseInt(items.itemId._hex)
        }}
      >
        <div className="flex items-center w-full p-1">
          <img src={item.image_data} alt="" className="h-[70px]" />
        </div>
        <div className="px-1">
          <p className="text-md truncate">{item.item_name}</p>
        </div>
      </div>
    </>
  );
}
