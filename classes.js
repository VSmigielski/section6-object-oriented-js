// Begin a class declaration
class Person {
    // Contructor for class
    constructor(first, last) {
        this.firstName = first
        this.lastName = last
    }

    hello() {
        console.log("Hello " + this.firstName + ", your major is " + this.major)
    }
}

// Inheritance using Person to make a Student
class Student extends Person {
    constructor(first, last, major) {
        super(first, last)
        this.major = major
        this.tuitionPaid
    }

    // Create a proxy that hides the actual name
    get studentFirstName() {
        return this.firstName
    }

    // setter
    set payment(amount) {
        if (amount >= 100) {
            this.tuitionPaid = amount
        } else {
            console.log("Amount paid must be over $100")
        }
    }

    // getter
    get payment() {
        if (this.tuitionPaid >= 100) {
            console.log("The amount you paid is $" + this.tuitionPaid)
        } else {
            return this.tuitionPaid
        }
    }

    studentMajor() {
        console.log(this.firstName + "'s major is " + this.major)
    }
}

// Declare new object using class Person
let person = new Person("Mark", "Jones")

// call the function from the Person class
person.hello()

let student = new Student("Jane", "Smith", "Management Information Systems")
student.studentMajor()

let student1 = new Student("Mark", "Jones", "Math")
student1.hello()

// Consoles the student's name
console.log(student1.studentFirstName)

// Access the setter because it's assigning a value
student1.payment = 150
// Access the getter because it's just an expression
student1.payment