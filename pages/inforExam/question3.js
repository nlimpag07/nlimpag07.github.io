import React, { useState, useEffect } from "react";
const PersonForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setName(evt.target.name.value);
  };
  useEffect(() => {
    name && alert("My name is:" + name);
  }, [name]);
  return (
    <section>
      <div id="questionThree">
        <h1>Question 3 Answer:</h1>
        <div
          id="targetElem"
          style={{ backgroundColor: "#ffffff", padding: "5px 10px" }}
        >
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" id="name" />
            </label>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </section>
  );
};
export default PersonForm;
