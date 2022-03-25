import React, { useState, useEffect } from "react";
const Question6 = () => {
  var firstArray = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
  var newArray = function () {
    var entry = firstArray.pop();
    if (entry) {
      // do something to the current entry...
      newArray();
    }
    console.log(firstArray);
    console.log(entry);
  };
  newArray();
  return (
    <section>
      <div id="questionSix">
        <h1>Question 6 Answer:</h1>
        <div
          id="targetElem"
          style={{
            backgroundColor: "#ffffff",
            padding: "20px",
            fontSize: "14px",
          }}
        >
          First, I would inspect the stack trace and detect the repeating
          pattern of line numbers. <br />
          These line numbers indicate the code that is being recursively called.{" "}
          <br />
          In this instance the execution of <b>newArray()</b> inside the
          newArray function itself.
          <br />
          <br />
          Then once verified that the recursion is implemented correctly, I will
          increase the stack's size in order to allow a larger number of
          invocations. The stack size can be increased by changing the settings
          of the compiler.
        </div>
      </div>
    </section>
  );
};
export default Question6;
