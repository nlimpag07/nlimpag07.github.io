import React, { useState, useEffect } from "react";
const Question5 = () => {
  var firstArray = "bean".split("");
  console.log("Initial firstArray", firstArray);
  var secondArray = firstArray.reverse();
  console.log("Initial secondArray", secondArray);
  console.log("Value of First Array after reverse", firstArray);
  var thirdArray = "frown".split("");
  console.log("Initial thirdArray", thirdArray);
  secondArray.push(thirdArray);
  console.log("==============");
  console.log("Value of Second Array after push", secondArray);
  console.log("Value of First Array after push", firstArray);
  console.log("==============");

  console.log("Values after executing slice(-1)");
  const firstLog = `First array length is ${
    firstArray.length
  } and surname is ${firstArray.slice(-1)}`;

  const secondLog = `Second array length is ${
    secondArray.length
  } and surname is ${secondArray.slice(-1)}`;

  console.log(firstLog);
  console.log(secondLog);
  return (
    <section>
      <div id="questionSix">
        <h1>Question 6 Answer:</h1>
        <p>Code Result</p>
        <div
          id="targetElem"
          style={{
            backgroundColor: "#ffffff",
            padding: "20px",
            fontSize: "14px",
          }}
        >
          {firstLog}
          <br />
          <br />
          {secondLog}
        </div>
        <br />
        <p>Reason as to why the result</p>
        <div
          id="targetElem"
          style={{
            backgroundColor: "#ffffff",
            padding: "20px",
            fontSize: "14px",
          }}
        >
          The Initial value <b>bean</b> has been split into an array{" "}
          <b>b,e,a,n</b> which makes it our <b>First array</b>. Then our Second
          Array is just a reverse of our First Array so the values are{" "}
          <b>n,a,e,b</b>. While we have a Third Array that is a split of{" "}
          <b>frown</b> which gives us <b>f,r,o,w,n</b>
          <br />
          <br />
          Hence:
          <br />
          First Array = <b>b,e,a,n</b>
          <br />
          Second Array = <b>n,a,e,b</b>
          <br />
          Third Array = <b>f,r,o,w,n</b>
          <br />
          <br />
          The execution of <b>firstArray.reverse()</b> sets the value of both
          the First and Second Array to <b>n,a,e,b</b>.<br />
          <br />
          At this time the values are:
          <br />
          First Array = <b>n,a,e,b</b>
          <br />
          Second Array = <b>n,a,e,b</b>
          <br />
          Third Array = <b>f,r,o,w,n</b>
          <br />
          <br />
          The execution of <b>secondArray.push(thirdArray)</b> Added the values
          of the Third Array to the existing values of Second Array. Thus
          results to:
          <br />
          <br />
          Second Array = <b>n,a,e,b,[Third Array Values]</b>
          <br />
          Second Array Values Expounded: <br />
          0: "n"
          <br />
          1: "a"
          <br />
          2: "e"
          <br />
          3: "b"
          <br />
          4: Array(5) <br />
          &nbsp; 0: "f" <br />
          &nbsp; 1: "r" <br />
          &nbsp; 2: "o" <br />
          &nbsp; 3: "w"
          <br />
          &nbsp; 4: "n"
          <br />
          <br />
          And since the declaration of <b>Second Array</b> is a reverse of{" "}
          <b>First Array</b>, Whatever{" "}
          <b>changes to the values of Second Array</b> will also be affecting
          the <b>values of First Array</b>.
          <br />
          <br />
          Thus:
          <br />
          New First Array Values Expounded: <br />
          0: "n"
          <br />
          1: "a"
          <br />
          2: "e"
          <br />
          3: "b"
          <br />
          4: Array(5) <br />
          &nbsp; 0: "f" <br />
          &nbsp; 1: "r" <br />
          &nbsp; 2: "o" <br />
          &nbsp; 3: "w"
          <br />
          &nbsp; 4: "n"
          <br />
          <br />
          Then <b>firstArray.slice(-1)</b> and <b>secondArray.slice(-1)</b> are
          pointing to the last index of the array [4], meaning it is pointing to
          the <b>Third Array values</b> that has been inserted to the{" "}
          <b>Second Array</b> Which eventually the same values inherited by the{" "}
          <b>First Array</b>.<br />
          <br />
          This explains the code result. <br />
          <br />
          <i>
            P.S: You may also check the console for the series of value changes.
          </i>
        </div>
      </div>
    </section>
  );
};
export default Question5;
