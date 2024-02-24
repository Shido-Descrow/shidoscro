import { useEffect, useState } from "react";
import { useWeb3Context } from "../context";

function ProductsSection({ products }) {
  const { UserCreateAggrement } = useWeb3Context();

  const purchase = async (product) => {
    try {
      await UserCreateAggrement(
        parseInt(product.itemId),
        product.merchant_add,
        parseInt(product.price?._hex)
      );
      alert("Product purchased successfully.");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 sm:py-8 lg:px-8">
        <h2 className="text-2xl pb-2 border-b border-gray-700 font-bold tracking-tight mb-4">
          Products Listed
        </h2>

        <div className="pt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
          {products.map((product, index) => {
            // let [name, desc, src, merchantAddress, hex1, hex2] = product;
            return (
              <div
                key={index}
                className="bg-black border border-gray-800 
                p-7 w-[270px] max-w-[340px] shadow-2xl shadow-gray-900 group relative rounded-md overflow-hidden  hover:shadow-lg"
              >
                <div className="h-[250px] aspect-w-1 aspect-h-1">
                  <img
                    src={product[2]}
                    alt="Product"
                    className="object-cover w-full h-full rounded"
                  />
                </div>
                <div className="py-4 flex flex-col space-y-1">
                  <h3 className="text-3xl mb-3 font-semibold">
                    {product[0]}
                    <span className="text-gray-500 ml-2 text-[1.1rem]">
                      #{parseInt(product["itemId"])}
                    </span>{" "}
                  </h3>
                  <h3 className="text-xl font-semibold flex">
                    Price :{" "}
                    <p className="font-normal text-sm">
                      <span className="text-white text-xl ml-2">
                        {parseInt(product["price"] / Math.pow(10, 18))}
                      </span>
                      SHIDO
                    </p>
                  </h3>
                  <p className="text-xl font-semibold flex flex-col">
                    <p>Merchant address :</p>
                    <span className="text-xs  font-light">{product[3]}</span>
                  </p>
                  F
                </div>
                <button
                  className=" 
                  bg-purple-700 rounded-md px-4 py-1 transition-colors duration-150 "
                  onClick={() => purchase(product)}
                >
                  Generate agreement
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const [products, setProducts] = useState([]);
  const { contract, getListedItems } = useWeb3Context();
  useEffect(() => {
    const fetchProducts = async () => {
      const prod = await getListedItems();
      setProducts(prod);
      console.log(prod);
    };
    if (contract) {
      fetchProducts();
    }
  }, [contract]);
  return <ProductsSection products={products} />;
  // return "";
}
