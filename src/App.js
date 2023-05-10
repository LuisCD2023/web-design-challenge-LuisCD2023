import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Presentation } from "./components/Presentation";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="bg-slate text-black h-screen flex text-black">
      
        <Routes>
          <Route path="/" element={<Presentation></Presentation>}></Route>
        </Routes>
      
    </div>
  );
}

export default App;
