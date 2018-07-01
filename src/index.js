import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";




const Home = () => (
 
    <App />

);

ReactDOM.render(<Home />, document.getElementById("root"));
registerServiceWorker();
