import React, { useState, useEffect } from "react";
const PersonForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "../q4Script.js";
    script.async = true;
    document.body.appendChild(script);
    window.ajax && console.log("Ajax is loaded");
  }, []);
  return (
    <section>
      <div id="questionFour">
        <h1>Question 4 Answer:</h1>
        <p>Result from the Script:</p>
        <div
          id="targetElem"
          style={{
            backgroundColor: "#666666",
            padding: "20px",
            fontSize: "14px",
            fontWeight: 700,
            color: "#ffffff",
          }}
          onLoad={() => start()}
        >
          <div id="newTarget">
            <div id="error"></div>
            <div id="content"></div>
          </div>
        </div>
        <br />
        <p>New Code Using Promise:</p>
        <div
          id="targetElem"
          style={{
            backgroundColor: "#666666",
            padding: "20px",
            fontSize: "14px",
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          <div>
            <code>{`
            function addToPage(content) {
 document.getElementById("content").textContent = content;
 }
 `}</code>
            <br />
            <br />
            <code>{`
 function showError(error) {
 document.getElementById("error").textContent = error;
 }
 `}</code>
            <br />
            <br />
            <code>{`
let ajax = (url) => {`}</code>
            <br />
            <br />
            <code>{`
  return new Promise((resolve, reject) => {`}</code>
            <br />
            <br />
            <code>{`
    let request = new XMLHttpRequest();`}</code>
            <br />
            <code>{`
    request.open("GET", url, true);`}</code>
            <br />
            <code>{`
    request.onload = () => {`}</code>
            <br />
            <code>{`
      if (request.status >= 200 && request.status < 400) {`}</code>
            <br />
            <code>{`
        resolve(request.responseText);`}</code>
            <br />
            <code>{`
      } else {`}</code>
            <br />
            <code>{`
        reject(request.status);`}</code>
            <br />
            <code>{`
      }`}</code>
            <br />
            <code>{`
    };`}</code>
            <br />
            <code>{`
    request.onerror = () => reject(request.statusText);`}</code>
            <br />
            <code>{`
    request.send();
  });
};
`}</code>
            <br />
            <br />
            <code>{`
ajax({ url: "info.txt" })`}</code>
            <br />
            <code>{`
  .then((data) => {
    addToPage(data);
  })`}</code>
            <br />
            <code>{`
  .catch((error) => {
    showError(error);
  });`}</code>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PersonForm;
