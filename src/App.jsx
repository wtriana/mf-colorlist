import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import ColorList from "./components/ColorList";

const App = () => {


  return <>
    <ColorList  colorList={[]} />
    <ColorList  colorList={["#ffea00","#0062ff","#ff1100",]} />
  </>;
}
  
;
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
