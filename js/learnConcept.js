
// #########################
// Call Method
//############################

// function getEmail(xy,z){
//     console.log(xy,z)
//         return this.firstName +"."+this.lastName+"@test.com";
//     }

// let student={
//     "firstName":"sibu",
//     "lastName":"basak",
//     "age":24,
// }

// let teacher={
//     "firstName":"Subhankar",
//     "lastName":"basak",
//     "age":24,
// }

// console.log(getEmail.call(student,"hello","bye"));


// #########################
// Apply Method
//############################

// function getEmail(xy){
//     console.log(xy)
//         return this.firstName +"."+this.lastName+"@test.com";
//     }

// let student={
//     "firstName":"sibu",
//     "lastName":"basak",
//     "age":24,
// }

// let teacher={
//     "firstName":"Subhankar",
//     "lastName":"basak",
//     "age":24,
// }

// console.log(getEmail.apply(student,["hello","bye"]));



// #########################
// Bind Method
//############################


//bind method

// function getEmail() {
//     return this.firstName + "." + this.lastName + "@test.com";
// }

// let student = {
//     "firstName": "sibu",
//     "lastName": "basak",
//     "age": 24,

// }

// let teacher = {
//     "firstName": "Subhankar",
//     "lastName": "basak",
//     "age": 24,
// }
// let email = getEmail.bind(student);
// console.log(email());


// #########################
// Function Chaining
//############################
let s = "  qwerty   ";
console.log(s.trim().concat('x').length);