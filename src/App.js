import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Router from "./Routing";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
