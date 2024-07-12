import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./fonts/yeezy_tstar-bold-webfont.ttf";
import Layout from "./components/layout.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import React from "react";

function App() {
  return (
    <div>
      <Header offer="FREE EXPRESS SHIPPING ON ORDERS £70+"/>
      <Layout mainTitle="BESTSELLERS" mainMessage="The must-have styles all your friends have been telling you about"/>
      <Footer />
    </div>
  );
}

export default App;
