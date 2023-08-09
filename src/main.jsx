import ReactDOM from "react-dom/client";
import "./index.css";
import { CallbackHook } from "./06-memos/CallbackHook";
//import { CounterApp } from "./01-UseState/CounterApp" ;
//import { CounterWithCustomHook } from "./01-UseState/CounterWithCustomHook";
// import { SimpleForm } from "./02-UseEfect/SimpleForm";
//import { FormWhitCustomHook } from "./02-UseEfect/FormWhitCustomHook";
// import { MultipleCustomHooks } from "./03-Examples/MultipleCustomHooks";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { Layout } from "./05-useLayoutEffect/Layout";
// import { Memorize } from "./06-memos/Memorize";
// import { MemoHook } from "./06-memos/MemoHook";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <CallbackHook />
  //</React.StrictMode>
);
