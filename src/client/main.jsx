import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store/store";
import {NextUIProvider} from "@nextui-org/react";
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </Provider>
  </React.StrictMode>,
);
