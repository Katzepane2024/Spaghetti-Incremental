function returnstatsinfo() {
    var measurement = "gayness"
    if (game.spaghetti / 4 < 132.5) {
        return game.spaghetti / 4 * 4.227
        // measurement = "measuring cups"
    } else if (game.spaghetti / 4 < 2.5e6) {
        return game.spaghetti / 4 / 132.5
        // measurement = "baths"
    } else if (game.spaghetti / 4 < 1e12) {
        return game.spaghetti / 4 / 2.5e6
        // measurement = "olympic swimming pools"
    } else if (game.spaghetti / 4 < 5e14) {
        return game.spaghetti / 4 / 1e12
        // measurement = "lakes"
    } else if (game.spaghetti / 4 < 3.75e18) {
        return game.spaghetti / 4 / 5e14
        // measurement = "meteors"
    } else if (game.spaghetti / 4 < 2.2e22) {
        return game.spaghetti / 4 /3.75e18;
        // measurement = "seas"
    } else if (game.spaghetti / 4 < 1.08e27) {
        return game.spaghetti / 4 / 2.2e22
        // measurement = "earth's moon"
    } else if (game.spaghetti / 4 < 3.8e35) {
        return game.spaghetti / 4 / 1.08e27
        // measurement = "earth"
    } else if (game.spaghetti / 4 < 1e47) {
        return game.spaghetti / 4 / 3.8e35
        // measurement = "solar system to Neptune"
    } else if (game.spaghetti / 4 < 4e64) {
        return game.spaghetti / 4 / 1e47
        // measurement = "solar system to Oort Cloud"
    } else if (game.spaghetti / 4 < 1e80) {
        return game.spaghetti / 4 / 4e64
        // measurement = "galaxies"
    } else {
        return game.spaghetti / 4 / 1e80
        // measurement = "universes"
    }
}