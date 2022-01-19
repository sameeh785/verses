import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing/";
import Channel from "./Pages/Chanel/";
import SearchProvider from "./context/Verse";
import "./App.css";

function App() {
  return (
    <SearchProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/channel" element={<Channel />} />
        </Routes>
      </BrowserRouter>
    </SearchProvider>
  );
}

export default App;
