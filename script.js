//Part 1: Understanding and Creating Objects
// 1. Create an object to represent a student with properties 
let student = {
    name: "John Doe",
    age: 21,
    enrolled: true,
    courses: ["Math", "Science", "History"],
    displayInfo: function() {
        if (this.enrolled) {
            console.log("The student " + this.name + ", aged " + this.age + ", is enrolled in the courses " + this.courses.join(", ") + ".");
        } else {
            console.log("The student " + this.name + ", aged " + this.age + ", is not currently enrolled.");
        }
    }
};

// Use console.log to output:
console.log(student.name);
console.log(student.age);
console.log(student.enrolled);
student.displayInfo();

//=============================================== 
//Part 2: Working with JSON
// Convert the student object into a JSON string
let studentJSON = JSON.stringify(student);

//Log the JSON string to the console
console.log(studentJSON);

// Convert the JSON string back into a JavaScript object
let parsedStudent = JSON.parse(studentJSON);

//Log the newly created object and compare to original
console.log(parsedStudent);
