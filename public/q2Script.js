function Person(name, from) {
  this.name = name;
  this.from = from;
  this.distractedGreeting = function () {
    const theLog = `Hello, I am ${name} from ${from}.`;
    //setInterval(theLog, 1000);
    console.log(theLog);
    // fill this function
  };
}
var alice = new Person("Alice", "Wonderland");
setInterval(function () {
  alice.distractedGreeting(); // logs "Hello, I am Alice from Wonderland." every 0.5s
}, 500);
