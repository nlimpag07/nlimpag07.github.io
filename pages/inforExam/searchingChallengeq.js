import React, { useState, useEffect } from "react";
const SearchingChallengeq = () => {
  /* 
  Have the function GroupTotals(strArr) read in the strArr parameter containing key:value pairs where the key is a string and the value is an integer. 
  Your program should return a string with new key:value pairs separated by a comma such that each key appears only once with the total values summed up. 
  For example: if strArr is ["B:-1", "A:1", "B:3", "A:5"] then your program should return the string A:6,B:2.
  Your final output string should return the keys in alphabetical order. Exclude keys that have a value of 0 after being summed up.
   */
  var myArr = [
    "X:-1",
    "Y:1",
    "X:-4",
    "B:3",
    "X:5",
    "X:5",
    "B:3",
    "C:0",
    "C:-1",
  ];
  function SearchingChallenge(strArr) {
    // code goes here
    strArr = strArr.map((x, index) => {
      const pair = x.split(":");
      const key = pair[0];
      const value = parseInt(pair[1]);
      return { key: key, val: value };
    });
    const output = strArr.reduce((acc, cur) => {
      let newKey = cur.key;
      let found = acc.find((e) => e.key === newKey);
      if (found) found.val += cur.val;
      else acc.push(cur);
      return acc;
    }, []);
    strArr = output
      .filter((o) => o.val !== 0)
      .sort((a, b) => (a.key > b.key ? 1 : -1))
      .map((o) => `${o.key}:${o.val}`)
      .toString();
    return strArr;
  }

  // keep this function call here
  console.log(SearchingChallenge(myArr));

  /* Have the function SumMultiplier(arr) take the array of numbers stored in arr and return the string true if any two numbers can be multiplied so that the answer is greater than double the sum of all the elements in the array. 
  If not, return the string false. 
  For example: if arr is [2, 5, 6, -6, 16, 2, 3, 6, 5, 3] then the sum of all these elements is 42 and doubling it is 84. 
  There are two elements in the array, 16 * 6 = 96 and 96 is greater than 84, so your program should return the string true. */
  function ArrayChallenge(arr) {
    // code goes here
    var total = arr.reduce((a, b) => a + b, 0);
    var isTrue = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        arr[i] * arr[j] > total * 2 ? isTrue.push(1) : isTrue.push(0);
      }
    }
    isTrue = isTrue.filter((n) => n === 1);
    return isTrue.length ? true : false;
  }

  // keep this function call here
  console.log(ArrayChallenge([2, 5, 6, -6, 16, 2, 3, 6, 5, 3]));

  /*
  Have the function ArrayChallenge(strArr) read the array of strings stored in strArr, which will contain 2 elements: 
  the first element will be a sequence of characters representing a word, and the second element will be a long string of comma-separated words, in alphabetical order, that represents a dictionary of some arbitrary length. 
  For example: strArr can be: ["worlcde", "apple,bat,cat,goodbye,hello,yellow,why,world"]. 
  Your goal is to determine the minimum number of characters, if any, can be removed from the word so that it matches one of the words from the dictionary. 
  In this case, your program should return 2 because once you remove the characters "c" and "e" you are left with "world" and that exists within the dictionary.
  If the word cannot be found no matter what characters are removed, return -1.
*/
  function ArrayChallenge2(strArr) {
    // code goes here
    const baseWord = strArr[0];
    const words = strArr[1].split(",");
    const numArr = [];
    /*
  for (let i = 0; i < words.length; i++){
      let res = baseWord.replace(words[i],'');
      console.log('res',res);
      res.length < baseWord.length && numArr.push(res.length);       
  }
  strArr = Math.min.apply(Math,numArr);
  console.log('numArr',numArr);
  console.log('min',Math.min.apply(Math,numArr));
  */
    for (let i = 0; i < words.length; i++) {
      let sWord = words[i].split("");
      let newBaseWord = baseWord;
      for (let w = 0; w < sWord.length; w++) {
        let theWord = new RegExp(sWord[w], "i");
        newBaseWord = newBaseWord.replace(theWord, "");
        let res = baseWord.replace(theWord, "");
        console.log("theWord", sWord[w]);
        console.log("newBaseWord", newBaseWord);
        console.log("w", w + 1);
        w + 1 === sWord.length && numArr.push(newBaseWord.length);
      }
    }

    /* for (let i = 0; i < words.length; i++) {
      let sWord = words[i].split("");
      const isFoundArray =[];
      for (let w = 0; w < sWord.length; w++) {
        let isFound = baseWord.includes(sWord[w]);
        console.log('theWord',sWord[w]);
        console.log('This letter is found in the sentence: ',baseWord + " Letter:" + sWord[w] + isFound);
        //console.log('w',w+1);
        isFoundArray.push(isFound);
        //w + 1 === sWord.length && numArr.push(newBaseWord.length);
      }
      console.log('isFoundArray',isFoundArray);
      let wordFound = isFoundArray.every((elem, i, arr) => elem === true);
      //wordFound ? baseWord.length - isFoundArray.length : baseWord.length;
      console.log('wordFound',wordFound ? baseWord.length - isFoundArray.length : baseWord.length);
    } */
    let isNotFound = numArr.every((elem, i, arr) => elem === arr[0]);
    strArr = isNotFound ? -1 : Math.min.apply(Math, numArr);
    return strArr;
  }

  // keep this function call here
  console.log(
    ArrayChallenge2(["woorrld", "apple,bat,cat,goodbye,hello,yellow,why,world"])
  );

  /* 
  Have the function HTMLElements(str) read the str parameter being passed which will be a string of HTML DOM elements and plain text. 
  The elements that will be used are: b, i, em, div, p. For example: if str is "<div><b><p>hello world</p></b></div>" then this string of DOM elements is nested correctly so your program should return the string true.
  If a string is not nested correctly, return the first element encountered where, if changed into a different element, would result in a properly formatted string. 
  If the string is not formatted properly, then it will only be one element that needs to be changed. For example: if str is "<div><i>hello</i>world</b>" then your program should return the 
  string div because if the first <div> element were changed into a <b>, the string would be properly formatted.
  Once your function is working, take the final output string and concatenate it with your ChallengeToken, and then replace every fourth character with an underscore.
  Your ChallengeToken: m0lxqy8sa27
 */
  function StringChallenge(str) {
    // code goes here
    const chaToken = "m0lxqy8sa27";
    let regexp = new RegExp(/<(.*?)>/g);
    const isPartnered = [];
    const array = [...str.matchAll(regexp)];
    let c = array.flatMap((x) => {
      return { key: x[0], val: x[1] };
    });
    let cc = c;
    for (let i = 0; i < cc.length; i++) {
      console.log(cc[i].val);
      let re = c.find((r) => `/${cc[i].val}` === r.val);
      if (re) {
        isPartnered.push({ o: cc[i].val, c: re.val, s: true });
        const index = cc.indexOf(re);
        console.log(index);
        index > -1 && cc.splice(index, 1);
      } else {
        isPartnered.push({ o: cc[i].val, c: null, s: false });
      }
      console.log(cc.length);
      console.log(re);
    }
    let isProper = isPartnered.find((r) => r.s !== true);
    console.log(isPartnered);
    console.log(isProper);
    str = isProper
      ? [...isProper.o.concat("", chaToken)]
          .map((l, i) => ((i + 1) % 4 ? l : "_"))
          .join("")
      : true;
    //str = [...str].map((l,i) => (i + 1) % 4 ? l : '_').join('');
    return str;
  }

  // keep this function call here
  console.log(
    StringChallenge("<div>abc</div><p><em><i>test test test</b></em></p>")
  );

  /* Write a function promiseAll which takes an array of Promises as an argument, and returns a promise. If it is resolved, it returns the result of each promise in an array. 
  If one of the promises is rejected, it should return an error in catch block. */
  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "foo");
  });
  var promiseAll = (prms) => Promise.all([...prms]);
  promiseAll([promise1, promise2, promise3])
    .then((values) => {
      console.log("Values", values);
    })
    .catch((e) => {
      console.log("Error", e);
    });

  for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i);
      alert(i);
    }, 1000 + i);
  }

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
export default SearchingChallengeq;
