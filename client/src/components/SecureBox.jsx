import React from "react";
import { BookCheck, Lightbulb, Smile } from "lucide-react";

const SecureBox = () => {
  return (
    <main className="flex flex-col w-full py-24 max-sm:space-y-20 space-y-6">
      {/* first */}
      <div className="dotted w-full">
        <div className="h-40  px-5 bg-bg flex 
        max-sm:flex-col justify-between w-full  items-center mx-auto">
          <div className="text-[2.6rem] font-semibold max-sm:w-full w-[50%] text-white ">
            <h1>We Secure and </h1>
            <h1>Protect You</h1>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <p className="text-gray-400 text-[1.1rem] max-sm:w-[90%] w-[70%]">
              What Are Crypto & Web3 Escrow Services And How Do They Work?
            </p>
            <a
              target='_blank'
              href="https://medium.com/@spendingcrypto/what-are-crypto-web3-escrow-services-and-how-do-they-work-d28452df1ff1#:~:text=Funds%2FAssets%20Deposited%3A%20The%20buyer,ability%20to%20complete%20the%20transaction."
              className="text-primary flex items-center hover:text-white"
            >
              <span className="h-[0.1rem] w-[40px] mr-4 my-auto bg-primary"></span>
              Learn More
            </a>
          </div>
        </div>
      </div>
      {/* second */}
      <div
        className="flex max-sm:flex-col sm:space-x-8 max-sm:space-y-8 py-10 justify-between items-center
       w-full mx-auto px-8"
      >
        <section
          className="flex flex-col 
            space-y-4 max-sm:items-start"
        >
          <BookCheck
            size={45}
            className="text-[1.4rem] p-2 bg-primary rounded-full"
          />
          <h2 className="text-white text-[1.2rem] xl:text-[1.5rem] font-semibold">
            Truly Secure
          </h2>
          <p className="text-gray-400 xl:text-[1.1rem] w-[80%]">
            Escrow system will keep your funds truly secure during the entrire
            transaction process.
          </p>
        </section>
        <section className="flex flex-col space-y-4">
          <Lightbulb
            size={45}
            className="text-[1.4rem] p-2 bg-primary rounded-full"
          />
          <h2 className="text-white text-[1.2rem] xl:text-[1.5rem] font-semibold">
            Fully Complaint
          </h2>
          <p className="text-gray-400 xl:text-[1.1rem] w-[80%]">
            Good to know who you{"'"}re dealing with, so we verify each and
            every user ensuring transactions are fully complaint.
          </p>
        </section>
        <section className="flex flex-col space-y-4">
          <Smile
            size={45}
            className="text-[1.4rem] p-2 bg-primary rounded-full"
          />
          <h2 className="text-white text-[1.2rem] xl:text-[1.5rem] font-semibold">
            Totally Awesome
          </h2>
          <p className="text-gray-400 xl:text-[1.1rem] w-[80%]">
            We designed the Shidoscrow with all the hardwork and dedication so
            it can make your trasaction on Shido experience totally awesome.
          </p>
        </section>
      </div>
    </main>
  );
};

export default SecureBox;
