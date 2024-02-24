import background from "../assets/background.png";
import "../App.css";
import { BackgroundGradientAnimation } from "../components/ui/BgGradient";
import { SparklesText } from "../components/SparklesText";

function LandingPage() {
  return (
    <div className="w-full bg-black flex flex-col space-y-10 min-h-screen">
      <SparklesText />
      <BackgroundGradientAnimation />
      <main className="max-w-[1800px] px-8 mx-auto py-6 flex justify-between 
      items-center text-white">
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
            className="max-w-[700px] md:w-[400px]"
          />
        </div>
      </main>

      {/* dotted  line*/}
      <div className='dotted border-y border-gray-800 w-full pb-40 h-40'>
        {/* <div className='bg-black/70 text-white blur-lg text-center h-40 w-[76%] mx-auto'>
          <h1 className='text-3xl text-white'>hii</h1>
        </div> */}
      </div>

      {/* <main className="max-w-[1800px] mx-auto">
        <SparklesText />
      </main> */}
    </div>
  );
}

export default LandingPage;
