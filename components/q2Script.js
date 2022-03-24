const Question2Script = () => {
  function Person(name, from) {
    this.distractedGreeting = function () {
      const theLog = `Hello, I am ${name} from ${from}.`;
      console.log(theLog);
      // fill this function
    };
  }
  var alice = new Person("Alice", "Wonderland");
  //const content = alice.distractedGreeting(); // logs "Hello, I am Alice from Wonderland." every 0.5s
  alice.distractedGreeting();
  return <></>;
};
export default Question2Script;
