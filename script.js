
//Part 1: Declaring and Invoking Functions

//Step 1: Declare a function named greet
function greet(name = 'Simon') {
    return `Hello ${name}, Good Morning!`;  
}
//Step 2: Invoke the greet function and log the result
console.log(greet("Jarif")); // Output: Hello Jarif, Good Morning!
console.log(greet());   // Output: Hello Simon, Good Morning!



//Step 3: addNumbers function (matching your example's style) 
function addNumbers(num1, num2) {
    return num1 + num2;
}

let result = addNumbers(5, 10);
console.log(result); // 15


//Step 4: Global and Local Scope Example
let x = 10;

function changeValue() {
    let x = 20;  // Local scope
    console.log("Inside function, x =", x);
}

changeValue();
console.log("Outside function, x =", x);



//Step 5: Create a function with closure 

function outerFunction() {
    let count = 0; // Local variable inside the outer function
    function innerFunction() {
        count++; // Update the local variable
        console.log("Count is: " + count);
    }
    return innerFunction;
}

let myClosure = outerFunction();
myClosure(); // Logs: "Count is: 1"
myClosure(); // Logs: "Count is: 2"
myClosure(); // Logs: "Count is: 3"


//Bonus Challenge: Modify the greet function to provide a default greeting if no name is passed.


function greet(name = "") {
    return `Hello, Good Morning ${name}!`;
}

console.log(greet("Jarif"));  // Output: Hello, Good Morning Jarif!
console.log(greet());   // Default Greeting: Hello, Good Morning!


//Bonus Challenge:•	Experiment with closures by creating another function similar to outerFunction but with a different behavior. 

function createAdder() {
    let sum = 0;
    function innerAdder(num) {
        sum += num;
        console.log(`Current sum: ${sum}`);
    }
    return innerAdder;
}

let myClosure2 = createAdder();

// Test cases
myClosure2(5);  // Current sum: 5
myClosure2(10); // Current sum: 15
myClosure2(3);  // Current sum: 18