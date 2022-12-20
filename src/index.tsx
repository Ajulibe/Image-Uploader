import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { GlobalStyles } from "styles/globalStyles";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(
 document.getElementById("root") as HTMLElement
);
root.render(
 <React.StrictMode>
  <ChakraProvider>
   <Global styles={GlobalStyles} />
   <ToastContainer />
   <App />
  </ChakraProvider>
 </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
