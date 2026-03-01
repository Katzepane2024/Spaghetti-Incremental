function returnstatsinfo() {
    var measurement = "gayness"
    if (game.spaghetti / 4 < 132.5) {
        return beautify(game.spaghetti / 4 * 4.227) + " Measuring Cups."
        // measurement = "measuring cups"
    } else if (game.spaghetti / 4 < 2.5e6) {
        return beautify(game.spaghetti / 4 / 132.5) + " Baths."
        // measurement = "baths"
    } else if (game.spaghetti / 4 < 1e12) {
        return beautify(game.spaghetti / 4 / 2.5e6) + " Olympic Swimming Pools."
        // measurement = "olympic swimming pools"
    } else if (game.spaghetti / 4 < 5e14) {
        return beautify(game.spaghetti / 4 / 1e12) + " Lakes."
        // measurement = "lakes"
    } else if (game.spaghetti / 4 < 3.75e18) {
        return beautify(game.spaghetti / 4 / 5e14) + " Meteors."
        // measurement = "meteors"
    } else if (game.spaghetti / 4 < 2.2e22) {
        return beautify(game.spaghetti / 4 /3.75e18) + " Seas."
        // measurement = "seas"
    } else if (game.spaghetti / 4 < 1.08e27) {
        return beautify(game.spaghetti / 4 / 2.2e22) + " Moons."
        // measurement = "earth's moon"
    } else if (game.spaghetti / 4 < 3.8e35) {
        return beautify(game.spaghetti / 4 / 1.08e27) + " Earths."
        // measurement = "earth"
    } else if (game.spaghetti / 4 < 1e47) {
        return beautify(game.spaghetti / 4 / 3.8e35) + " Solar Systems."
        // measurement = "solar system to Neptune"
    } else if (game.spaghetti / 4 < 4e64) {
        return beautify(game.spaghetti / 4 / 1e47) + " Oort Clouds."
        // measurement = "solar system to Oort Cloud"
    } else if (game.spaghetti / 4 < 1e80) {
        return beautify(game.spaghetti / 4 / 4e64) + " Galaxies."
        // measurement = "galaxies"
    } else {
        return beautify(game.spaghetti / 4 / 1e80) + " Universes."
        // measurement = "universes"
    }
}