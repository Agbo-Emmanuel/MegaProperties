import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./landing/pages/Landing";
import Home from "./landing/pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Landing />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
