//Part 1: Understanding and Creating Objects
// 1. Create an object to represent a student with properties
let student = {
  name: "John Doe",
  age: 21,
  enrolled: true,
  courses: ["Math", "Science", "History"],
  displayInfo: function () {
    if (this.enrolled) {
      console.log(
        "The student " +
          this.name +
          ", aged " +
          this.age +
          ", is enrolled in the courses " +
          this.courses.join(", ") +
          "."
      );
    } else {
      console.log(
        "The student " +
          this.name +
          ", aged " +
          this.age +
          ", is not currently enrolled."
      );
    }
  },
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

//==================================================
//Part 3: Using Destructuring Assignment
//Use destructuring to extract the name and courses properties from the student object
let { name, courses } = student;
console.log(name);
console.log(courses);

// Creating an array of scores
let scores = [85, 92, 78, 90];

// Destructuring the first two scores
let [score1, score2] = scores;
console.log(score1);
console.log(score2);

//==============================================

//Part 4: The Spread Operator
// Clone the student object using the spread operator
let clonedStudent = { ...student };

//Add a new property (e.g., graduationYear) to the cloned object and log it
clonedStudent.graduationYear = 2025;
console.log(clonedStudent);

// Merge two arrays: student.courses with a new array
let updatedCourses = [...student.courses, "Art", "Physics"];
console.log(updatedCourses);
//============================================================

//Part 5: Object Methods
// Adding methods to the student object
student.addCourse = function (newCourse) {
  this.courses.push(newCourse);
};

//Add another method to calculate and return the total number of courses.
student.totalCourses = function () {
  return this.courses.length;
};

// Testing the new methods
student.addCourse("Philosophy");
console.log(student.courses);

console.log(student.totalCourses());

//====================================
//Bonus Task
// Calculating the average score using reduce
let totalScore = scores.reduce(function (total, current) {
  return total + current;
}, 0);

let averageScore = totalScore / scores.length;

console.log(averageScore);
