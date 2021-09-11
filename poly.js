class Movie {
    constructor(title) {
        this.title = title
    }

    plot() {
        return "No plot here"
    }

    get name() {
        return this.title
    }
}

class ET extends Movie {
    constructor() {
        super("ET")
    }

    // overriding the method
    plot() {
        return "Cute alien take over the earth"
    }
}

class StarWars extends Movie {
    constructor() {
        super("Star Wars")
    }

    // overriding the method
    plot() {
        return "The force beats everything"
    }
}

class JurassicPark extends Movie {
    constructor() {
        super("Jurassic Park")
    }

    // overriding the method
    plot() {
        return "Dinosaurs once again rule the earth"
    }
}

class AwfulMovies extends Movie {
    constructor() {
        super("Awful Movie")
    }

    // No plot method change
}

function selectMovie() {
    let randomNumber = Math.floor(Math.random() * 4) + 1

    switch(randomNumber) {
        case 1:
            return new ET()
        break
        case 2:
            return new StarWars()
        break
        case 3:
            return new JurassicPark()
        break
        case 4:
            return new AwfulMovies()
        break
    }
}

for (let i = 0; i < 10; i++) {
    let movie = selectMovie()

    // getter & polymorphism at work
    console.log("Movie " + movie.name + " is about " + movie.plot())
}