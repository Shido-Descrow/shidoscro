import background from "../assets/background.png";
import "../App.css";

function LandingPage() {
  return (
    <div className="w-full min-h-screen bg-[#0D0D0D]">
      <div className="w-full min-h-[calc(100vh-4rem)] text-[#FFFFFF] flex flex-col items-center sm:flex-row">
        <section className="sm:w-1/2 flex">
          <img className="w-full my-auto" src={background} alt="Background" />
        </section>
        <section className="sm:w-1/2 flex flex-col items-center justify-center text-center space-y-8">
          <h2 className="text-[5rem] font-semibold">descrow</h2>
          <p className="text-2xl">Decentralized middleman</p>
          <button className="rounded-md bg-indigo-600 mx-auto px-4 py-2 bg-blue text-2xl capitalize rounded-lg">
            Get Started
          </button>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
