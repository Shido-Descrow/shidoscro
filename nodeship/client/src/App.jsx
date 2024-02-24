import { useEffect, useState } from "react";
import "./App.css";


const Data = ({ data }) => {
  console.log('dd',data)
  const [orders,setOrders] = useState(data)
  console.log('oo',orders)

  useEffect(()=>{
    setOrders(data)
  },[data])


  const updateStatus = async (id)=>{
    await fetch(`http://localhost:3000/orders/${id}`,{
      method: "POST",
      body: JSON.stringify({status:3}),
      headers: {"Content-Type":"application/json"}
    })
    .then((res)=>{
      return res.json
    })
    .then(updated=>{
      data = orders?.map((order)=>order.id==id?updated:order)
    })
  }

  return (
<table className="min-w-full table-fixed">
  <thead className="bg-gray-100">
    <tr>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Buyer ID</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Merchant ID</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order Date</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product ID</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Update Status</th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">
    {orders?.map((order) => (
      <tr key={order._id} className="hover:bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.buyerId}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.merchantId}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.orderDate}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.productId}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.status}</td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <button
            onClick={() => updateStatus(order._id)}
            disabled={order.status == 3}
            className={`text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium ${order.status == 3 ? 'bg-gray-300' : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'}`}
          >
            {order.status == 3 ? "Delivered":"Mark as delivered"}
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

  );
};

function App() {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/orders/")
      .then((res) => {
        return res.json();
      })
      .then((d) => setData(d));
  }, []);

  if (data) console.log(data);

  return (
    <>
      <h1 className="h-1 m-9">Nodeship</h1>
      <Data data={data} />
    </>
  );
}

export default App;
