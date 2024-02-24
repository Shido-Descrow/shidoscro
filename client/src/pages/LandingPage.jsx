import background from "../assets/background.png";
import "../App.css";
import { BackgroundGradientAnimation } from "../components/ui/BgGradient";
import { SparklesText } from "../components/SparklesText";
import SecureBox from "../components/SecureBox";
import { WavyBox } from "../components/WavyBox";

function LandingPage() {
  return (
    <div className="w-full bg-black flex flex-col space-y-10 ">
      <SparklesText />
      <main className="max-w-[1800px] mx-auto px-5">
        <main
          className="max-w-[1800px] px-3 mx-auto py-6 flex max-sm:space-y-5 max-sm:flex-col justify-between 
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

        {/* secure component */}
        <SecureBox />
        {/* wavy box */}
        <WavyBox />
      </main>
    </div>
  );
}

export default LandingPage;
