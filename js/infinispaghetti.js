function infinispaghettireset() {
    if (game.spaghetti >= 1e80 && game.inchallenge === 0) {
        var fiftytwobomboclattenpussywagonchickennugget = confirm("Are you sure you want to reset?")
        if (fiftytwobomboclattenpussywagonchickennugget) {
            game.infinispaghetti += infinispaghettigain()
            game.spaghetti = 0
            game.spaghettiworker = 0
            game.spaghettimanager = 0
            game.spaghettifactory = 0
            game.spaghettiupgrade = [false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false]
            game.solarspaghetti = 0
            game.firstsolarreset = false
            game.planet = [false, false, false, false, false, false]
            game.sun = [0, 0, 0, 0, 0]
            game.fettuccine = 0
            game.nebula = [false, false, false, false]
            game.solarupgrade = [false, false, false, false, false, false, false, false]
            game.challenge = [false, false, false]
            game.inchallenge = 0
            if (!game.firstinfinitereset) {
                alert("The volume of the observable universe is about e79.40. Your spaghetti has filled the universe. Congradulations, you went from a small chef to a 5 star gourmet to a creator of worlds to the destroyer of universes.")
                game.firstinfinitereset = true
            }
        }
    } else {
        alert("Bro chill you can't you need e80.00 Spaghetti")
    }
}

function infinispaghettigain() {
    if (game.firstinfinitereset) {
        return Math.round(Math.log10((game.spaghetti / 1e80) + 10))
    } else {
        return 5;
    }
}