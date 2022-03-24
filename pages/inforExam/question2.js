import Script from "next/script";
import React, { useState, useEffect } from "react";

const Question2 = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "../q2Script.js";
    script.async = true;
    document.getElementById("targetElem").appendChild(script);
    return () => {
      document.getElementById("targetElem").removeChild(script);
    };
  }, []);

  return (
    <section>
      <div id="questionTwo">
        <h1>Question 2 Answer:</h1>
        <div
          id="targetElem"
          style={{ backgroundColor: "#ffffff", padding: "5px 10px" }}
        >
          Please Check the Console log.
        </div>
      </div>
    </section>
  );
};
export default Question2;
