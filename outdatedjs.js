// You may see this in legacy projects
// Creating an object
let student = new Object()

// Add properties & values to Object
student.firstName = 'Jane'
student.lastName = 'Smith'
student.age = 23

// Access properties
console.log(student.firstName)

// Object.prototype

// Another way to create an object
// next step in evolution of js
// If you don't want to use Object.prototype, call use param of null
let student1 = Object.create(Object.prototype)

// Add properties & values to Object
student1.firstName = 'Bob'
student1.lastName = 'Onyx'
student1.age = 23

// Add function hello to object.prototype
Object.prototype.hello = function() {
    console.log("Hello from prototype")
}

// Inherits from student1
let student2 = Object.create(student1)

console.log(student2.firstName)

// Calls the new function we added to the Object.prototype
student2.hello()

// Add function hello to object.prototype
Object.prototype.hello2 = function() {
    console.log("Hello " + this.firstName + " " + this.lastName + " from prototype")
}

// Can edit/rewrite the inherited object's properties
student2.firstName = 'Mark'
student2.lastName = 'Goldberg'

// Calls the new function we added to the Object.prototype
student2.hello2()

// Constructor to instantiate an object
function Student(first) {
    this.firstName = first
    this.hello = function() {
        console.log("Hello " + this.firstName + " and welcome to constructors")
    }
}

// Create an object using above constructor
let student3 = new Student('Jane')

console.log(student3.firstName)

student3.hello()