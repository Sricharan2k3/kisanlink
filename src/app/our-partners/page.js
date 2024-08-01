"use client";
import React, { useState } from "react";
import Component from "./s";
import Background from"../../utils/background"

const App = () => {
  return (
    <>
      <div className="w-full overflow-hidden">
        <Background title={"Our Partners"}></Background>
        <Component />
      </div>
    </>
  );
};
export default App;
