import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useWeb3Context } from "./context";
import AppBar from "./components/Appbar";
import { Outlet } from "react-router-dom";

function App() {
  const { getAggrements, contract } = useWeb3Context();
  return (
    <div className="w-full min-h-screen bg-primary1">
      <AppBar />
      <Outlet />
    </div>
  );
}

export default App;
