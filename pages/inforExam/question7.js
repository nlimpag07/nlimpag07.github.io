import React, { useState, useEffect } from "react";
const Question6 = () => {
  var myArr = ["A", "B", "C", "D", "E"];
  let root;

  class Node {
    constructor(data) {
      this.left = null;
      this.right = null;
      this.data = data;
    }
  }

  // Function to insert nodes in level order
  function insertLevelOrder(myArr, root, i) {
    // Base case for recursion
    if (i < myArr.length) {
      let temp = new Node(myArr[i]);
      root = temp;

      // insert left child
      root.left = insertLevelOrder(myArr, root.left, 2 * i + 1);

      // insert right child
      root.right = insertLevelOrder(myArr, root.right, 2 * i + 2);
    }
    return root;
  }

  // Function to print tree nodes in InOrder fashion
  function inOrder(root) {
    if (root != null) {
      inOrder(root.left);
      console.log(root.data + " ");
      inOrder(root.right);
    }
  }

  //let myArr = [1, 2, 3, 4, 5, 6, 6, 6, 6];
  root = insertLevelOrder(myArr, root, 0);
  //inOrder(root);
  console.log("=====Root=====");
  console.log(root);

  /* const myDisp = root.map((cnode) => {
    return <p>{cnode.data}</p>;
  }); */
  var maxDepth = function (root) {
    // create a stack and push the root node to it
    const stack = [{ node: root, depth: 1 }];
    // max depth found so far
    let max = 0;
    /*
     * On each iteration, pop a TreeNode off the stack and
     * push it's children back onto the stack, keeping track
     * of each TreeNodes depth along the way. Every time
     * a TreeNode is popped off the stack, see if it is the
     * deepest node found so far.
     */
    while (stack.length) {
      const { node, depth } = stack.pop();
      if (node) {
        max = Math.max(depth, max);
        stack.push({ node: node.left, depth: depth + 1 });
        stack.push({ node: node.right, depth: depth + 1 });
      }
    }
    return max;
  };
  //O(n^3)
  console.log("maxDepth", maxDepth(root));
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
          <canvas
            id="myCanvas"
            style={{
              border: "border:1px solid #000000",
            }}
            width="1900"
            height="900"
          ></canvas>
        </div>
      </div>
    </section>
  );
};
export default Question6;
