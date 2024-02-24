import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Mumbai } from "@thirdweb-dev/chains";
import router from "./router.jsx";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Web3ContextProvider } from "./context";
import "./index.css";
import './output.css'
import './styles.css'
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThirdwebProvider
    activeChain={Mumbai}
    clientId="80ed282f6c1f99a481e215f433790552"
  >
    <React.StrictMode>
      <Web3ContextProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </Web3ContextProvider>
    </React.StrictMode>
  </ThirdwebProvider>
);
