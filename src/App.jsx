import React, { useState } from "react";
import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main style={{ padding: "20px" }}>{renderPage()}</main>
    </div>
  );
}

export default App;
