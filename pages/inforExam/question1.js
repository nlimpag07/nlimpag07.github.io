import React, { useState, useEffect } from "react";
const Question1 = () => {
  function addLinks() {
    for (var i = 1; i <= 3; i++) {
      const url = document.createElement("a");
      url.innerHTML = "url " + i;
      url.onclick = function () {
        alert(i);
      };
      document.getElementById("targetElem").appendChild(url);
    }
  }
  useEffect(() => {
    window.addEventListener("load", addLinks);
  }, []);
  return (
    <>
      <section>
        <div id="questionOne">
          <h1>Question 1 Answers:</h1>
          <div
            id="targetElem"
            style={{ backgroundColor: "#ffffff", padding: "5px 10px" }}
          ></div>
          <p>
            A:{" "}
            <b>
              This Code Appends 3 link tags in the target child element with a
              text "Url".
            </b>
            (
            <i>
              In the document it is appended in the body. While in my example it
              is appended in a specific div element
            </i>
            ).
          </p>
          <p>
            B:{" "}
            <b>
              When the user clicks the first url, it triggers an alert message
              containing the first number it gets from the for-Loop which is 1.{" "}
            </b>
            (
            <i>
              If you click the 2nd and third Url, it would still display the
              alert message with the corresponding number generated from the
              for-Loop.
            </i>
            ).
          </p>
        </div>
      </section>
    </>
  );
};
export default Question1;
