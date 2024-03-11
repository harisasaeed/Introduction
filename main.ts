//Introduction

console.log("Hello! I am  a web developer")

//Personal Information
const personName: string = "Harisa Saeed"
const age: number = 23
const education: string[] = ["Diploma Of Associate Engineer"]
const skills: string [] = ["HTML", "CSS", "JAVASCRIPT", "PYTHON", "TYPESCRIPT"]
const experience: string = "Less then 6 months"
const project: string [] = ["Hello World", "calculator", "45 assigment of node js and typescript"]

//Print Personal Information
console.log(`My Name is ${personName}, and I am ${age} years old`)
console.log(`I am a self-taught developer with education background as ${education}`)
console.log(`I have skills in :`)
skills.forEach(skills => console.log("-" + skills))
console.log(`I have ${experience} experience in web developement field.`)
console.log("some of my projects includes")
project.forEach(project => console.log("*" + project))

//Conclusion
console.log("Thankyou for getting to  know me as a web developer")