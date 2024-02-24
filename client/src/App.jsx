import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import AppBar from "./components/Appbar";
import { useWeb3Context } from "./context";
import UpperRibbon from "./components/UpperRibbon";
import Footer from "./components/Footer";

function App() {
  const { getAggrements, contract } = useWeb3Context();
  return (
    <div className="w-full min-h-screen bg-primary1">
      <UpperRibbon />
      <AppBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
