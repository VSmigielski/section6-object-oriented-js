// Declare JSON object called lamp
let lamp = {
    // Can be written like this "type" : "desk"
    // Case sensitive
    // String
    type: "desk",
    // Number
    brightnessOfBulb: 60,
    // Boolean
    turnedOn: true,
    // A property as an object
    manufacturer: { 
        name: "Big Electric Company",
        model: "ABC1234",
        // Array within an object's property
        location: ["USA", "Germany", "UK"]
    },
    // You can create a function for the object
    turnLampOnOrOff: function() {
        console.log("The lamp will turn on or off.")
    }, 
    lampReport: function() {
        // The this keyword is mandatory in JS
        console.log("This lamp is a " + this.type + " lamp")
    }
}

// References this property of the object lamp
console.log(lamp.type)

// Referencing the nested object property of lamp
console.log(lamp.manufacturer.model)

// Reference the first function
lamp.turnLampOnOrOff()

// Returns the type of this property (number)
console.log(typeof lamp.brightnessOfBulb)

// Reference the second function
lamp.lampReport()

// Update the type of object
lamp.type = "overhead"

// Reference the second function
lamp.lampReport()