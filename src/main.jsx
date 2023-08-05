import ReactDOM from "react-dom/client";
import "./index.css";
//import { CounterApp } from "./01-UseState/CounterApp";
import { CounterWithCustomHook } from "./01-UseState/CounterWithCustomHook";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <CounterWithCustomHook />
  //</React.StrictMode>
);
