import React from "react";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea.jsx";
import Footer from "./components/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <React.StrictMode>
      <Navbar title="Text Analyzer" />
      <TextArea title="Enter Text To Analyze:" />
      <Footer />
    </React.StrictMode>
  );
};

export default App;
