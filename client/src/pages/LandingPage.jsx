import background from "../assets/background.png";
import "../App.css";
import { BackgroundGradientAnimation } from "../components/ui/BgGradient";
import { SparklesText } from "../components/SparklesText";

function LandingPage() {
  return (
    <div className="w-full bg-black flex flex-col space-y-10 ">
      <SparklesText />
      <main
        className="max-w-[1800px] px-8 mx-auto py-6 flex max-sm:space-y-5 max-sm:flex-col justify-between 
      items-center text-white"
      >
        {/* left */}

        <div className="flex flex-col items-start space-y-4">
          <h1 className="text-[3.2rem] font-bold max-md:text-[2.4rem] text-left max-w-[93%] ">
            The First Web3 Escrow on Shido Network
          </h1>
          <p className="text-gray-400 w-[90%] pb-12 text-[1rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            quis aspernatur odit, rerum optio ex magnam!
          </p>

          <button
            className="bg-primary px-10 font-semibold py-2 hover:bg-blue-400
          rounded-md "
          >
            Launch App
          </button>
        </div>

        {/* right image */}
        <div>
          <img
            src="https://shido.io/wp-content/uploads/2024/01/Group-709-1024x630.png"
            className="max-w-[700px] max-sm:w-[340px] md:w-[400px]"
          />
        </div>
      </main>

      {/* dotted  line*/}
      <div className="dotted w-full">
        <div className="h-40 py-24 px-5 bg-bg flex justify-between w-full max-w-[1800px] items-center mx-auto">
          <div className="text-[2.6rem] font-semibold w-[50%] text-white ">
            <h1>We Secure and </h1>
            <h1>Protect You</h1>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <p className="text-gray-400 text-[1.1rem] w-[70%]">
              What Are Crypto & Web3 Escrow Services And How Do They Work?
            </p>
            <a
              href="https://medium.com/@spendingcrypto/what-are-crypto-web3-escrow-services-and-how-do-they-work-d28452df1ff1#:~:text=Funds%2FAssets%20Deposited%3A%20The%20buyer,ability%20to%20complete%20the%20transaction."
              className="text-primary flex items-center hover:text-white"
            >
              <span className="h-[0.1rem] w-[40px] mr-4 my-auto bg-primary"></span>
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* <main className="max-w-[1800px] mx-auto">
        <SparklesText />
      </main> */}
    </div>
  );
}

export default LandingPage;
