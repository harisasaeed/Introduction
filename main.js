//Introduction
console.log("Hello! I am  a web developer");
//Personal Information
var personName = "Harisa Saeed";
var age = 23;
var education = ["Diploma Of Associate Engineer"];
var skills = ["HTML", "CSS", "JAVASCRIPT", "PYTHON", "TYPESCRIPT"];
var experience = "Less then 6 months";
var project = ["Hello World", "calculator", "45 assigment of node js and typescript"];
//Print Personal Information
console.log("My Name is ".concat(personName, ", and I am ").concat(age, " years old"));
console.log("I am a self-taught developer with education background as ".concat(education));
console.log("I have skills in :");
skills.forEach(function (skills) { return console.log("-" + skills); });
console.log("I have ".concat(experience, " experience in web developement field."));
console.log("some of my projects includes");
project.forEach(function (project) { return console.log("*" + project); });
//Conclusion
console.log("Thankyou for getting to  know me as a web developer");
