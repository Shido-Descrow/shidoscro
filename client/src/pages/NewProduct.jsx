import { useState } from "react";
import { useWeb3Context } from "../context";
import { ethers } from "ethers";

function generateRandomHex() {
  const randomDecimal = Math.floor(Math.random() * 1000000); // Generate a random number up to 999999
  const hexString = randomDecimal.toString(16); // Convert the random number to hexadecimal
  return `0x${hexString}`;
}

export default function NewProduct() {
  const [productName, setProductName] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const { MerchantListProduct } = useWeb3Context();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here you can perform actions like sending data to a server or validating input
    // For now, let's just log the form data

    console.log({
      productName,
      imageLink,
      description,
      price,
    });
    await MerchantListProduct(
      productName,
      ethers.BigNumber.from(generateRandomHex()),
      imageLink,
      description,
      price
    );
    alert("Product Listed");
    // You can reset the form after submission if needed
    // resetForm();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="m-4 bg-[#201F2D] p-8 rounded-lg shadow-lg text-[#E4E4E4]"
    >
      <h2 className="text-base font-semibold leading-7 text-[#E4E4E4] mb-6">
        Add Product
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label
            htmlFor="productName"
            className="block text-sm font-medium leading-6"
          >
            Product Name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="productName"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              autoComplete="productName"
              className="block w-full border border-[#5f5f5f] bg-transparent py-1.5 px-1 text-[#E4E4E4] placeholder-[#B9B9B9] focus:ring-0 text-sm leading-6"
              placeholder="Product Name"
            />
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="imageLink"
            className="block text-sm font-medium leading-6"
          >
            Image Link
          </label>
          <div className="mt-2">
            <input
              type="url"
              name="imageLink"
              id="imageLink"
              value={imageLink}
              onChange={(e) => setImageLink(e.target.value)}
              autoComplete="imageLink"
              className="block w-full border border-[#5f5f5f] bg-transparent py-1.5 px-1 text-[#E4E4E4] placeholder-[#B9B9B9] focus:ring-0 text-sm leading-6"
              placeholder="Image Link"
            />
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium leading-6"
          >
            Description
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              autoComplete="description"
              className="block w-full border border-[#5f5f5f] bg-transparent py-1.5 px-1 text-[#E4E4E4] placeholder-[#B9B9B9] focus:ring-0 text-sm leading-6"
              placeholder="Description"
            />
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium leading-6"
          >
            Price
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="price"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              autoComplete="price"
              className="block w-full border border-[#5f5f5f] bg-transparent py-1.5 px-1 text-[#E4E4E4] placeholder-[#B9B9B9] focus:ring-0 text-sm leading-6"
              placeholder="Price"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-start gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 rounded-md text-[#E4E4E4] focus-visible:outline-indigo-600"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
