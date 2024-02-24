"use client";
import React from "react";
import { WavyBackground } from "./ui/WavyBackground";

export function WavyBox() {
  return (
    <WavyBackground
      className=" border-gray-900 
     w-full mx-auto "
    >
      <p
        className="text-2xl md:text-4xl lg:text-7xl text-white font-bold 
      inter-var text-center"
      >
        Enjoy seemless experience
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Your Transactions, Your Terms: Trust the Decentralized Escrow
      </p>
    </WavyBackground>
  );
}
