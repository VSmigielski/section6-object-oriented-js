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
        if (this.turnedOn == true) {
            this.turnedOn = false
        } else {
            this.turnedOn = true
        }
    }, 
    lampReport: function() {
        // The this keyword is mandatory in JS
        console.log("This lamp is a " + this.type + " lamp")
    },
    lampStateReport: function() {
        // You can call the function in here as well 
        // this.turnLampOnOrOff()
        if (this.turnedOn == true) {
            console.log("The lamp is turned on.")
        } else {
            console.log("The lamp is turned off.")
        }
    }
}

// Currently true, this should make it false
lamp.turnLampOnOrOff()

// This function call should display the lamp is off
lamp.lampStateReport()

// Currently false, this should make it true
lamp.turnLampOnOrOff()

// This function call should display the lamp is on
lamp.lampStateReport()