import React from "react";
import ReactDom from "react-dom";
import Game1 from "game1";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/game" element={<Game1 />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
