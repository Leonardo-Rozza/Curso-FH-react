import ReactDOM from "react-dom/client";
import "./index.css";
//import { CounterApp } from "./01-UseState/CounterApp" ;
//import { CounterWithCustomHook } from "./01-UseState/CounterWithCustomHook";
// import { SimpleForm } from "./02-UseEfect/SimpleForm";
//import { FormWhitCustomHook } from "./02-UseEfect/FormWhitCustomHook";
import { MultipleCustomHooks } from "./03-Examples/MultipleCustomHooks";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <MultipleCustomHooks />
  //</React.StrictMode>
);
