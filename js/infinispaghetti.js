const infiniupgradecost = [2, 15, 40, 256, 1e4, 39810, 1e6, 1e7]
const infinichallengegoals = [17782, 1e19, 1e11, 1e24, 3.16e12]

function infinispaghettireset() {
    if (game.spaghetti >= 1e80 && game.inchallenge === 0) {
        if (!game.firstsolarreset) {
                var fiftytwobomboclattenpussywagonchickennugget = confirm("Are you sure you want to reset?")
            } else {
                var fiftytwobomboclattenpussywagonchickennugget = true
            }
        if (fiftytwobomboclattenpussywagonchickennugget) {
            game.infinispaghetti += infinispaghettigain()
            if (!game.spaghettiupgrade[16]) {
                game.spaghetti = 0
                game.spaghettiworker = 0
                game.spaghettimanager = 0
                game.spaghettifactory = 0
                game.spaghettiupgrade = [false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false]
                game.solarspaghetti = 0
                game.firstsolarreset = false
                game.planet = [false, false, false, false, false, false]
                game.sun = [0, 0, 0, 0, 0]
                game.fettuccine = 0
                game.nebula = [false, false, false, false]
                game.solarupgrade = [false, false, false, false, false, false, false, false]
                game.challenge = [false, false, false]
                game.inchallenge = 0
                game.solarresets = 0
                game.americans = 1
            }
            if (!game.firstinfinitereset) {
                alert("The volume of the observable universe is about e79.40. Your spaghetti has filled the universe. Congratulations, you went from a small chef to a 5 star gourmet to a creator of worlds to the destroyer of universes.")
                game.firstinfinitereset = true
            }
        }
    } else {
        alert("Bro chill you can't you need e80.00 Spaghetti")
    }
}

function infinispaghettigain() {
    if (game.spaghetti >= 1e80) {
        if (game.firstinfinitereset) {
            return Math.round(Math.log10((game.spaghetti / 1e80) + 10)) * (game.infinichallenge[2] ? Math.log10(game.solarresets + 10) : 1) * coordinateboost(2)
        } else {
            return 5 * (game.infinichallenge[2] ? Math.log10(game.solarresets + 10) : 1) * coordinateboost(2);
        }
    } else {
        return 0;
    }
}

function carcost(x) {
    return 10 * (1.15 ** game.infinicars[x]) - 10
}

function rocketcost(x) {
    return 2000 * (1.2 ** game.infinirockets[x])
}

function lightcost(x) {
    return 31622 * (1.25 ** game.infinilight[x])
}

function buycar(x) {
    if (game.coordinates[x] >= carcost(x)) {
        game.coordinates[x] -= carcost(x);
        game.infinicars[x]++
    }
}

function buyrocket(x) {
    if (game.coordinates[x] >= rocketcost(x)) {
        game.coordinates[x] -= rocketcost(x);
        game.infinirockets[x]++
    }
}

function buylight(x) {
    if (game.coordinates[x] >= lightcost(x)) {
        game.coordinates[x] -= lightcost(x);
        game.infinilight[x]++
    }
}

function infiniautomatorcost(x) {
    if (x === 0) {
        return 2 ** game.infiniclickers
    } else if (x === 1) {
        return 2 ** game.autocollapsers
    } else {
        return 3 ** game.infinisolarizers
    }
}

function buyinfiniautomator(x) {
    if (x === 0) {
        if (game.highestinfinispaghetti >= infiniautomatorcost(0)) {
            game.infiniclickers += 1
        }
    } else if (x === 1) {
        if (game.highestinfinispaghetti >= infiniautomatorcost(1)) {
            game.autocollapsers += 1
        }
    } else {
        if (game.highestinfinispaghetti >= infiniautomatorcost(2)) {
            game.infinisolarizers += 1
        }
    }
}

function infinitodistanceboost(x) {
    if (x === 0) {
        return Math.sqrt(game.infinispaghetti + 1)
    } else if (x === 1) {
        return Math.log2(game.infinispaghetti + 2)
    } else {
        return Math.log10(game.infinispaghetti + 10)
    }
}

function coordinateboost(x) {
    return Math.log10(game.coordinates[x] + 10)
}

function buyinfiniupgrade(x) {
    if(game.infinispaghetti >= infiniupgradecost[x]) {
        if(!game.infiniupgrade[x]) {
            game.infinispaghetti -= infiniupgradecost[x];
            game.infiniupgrade[x] = true;
        }
    }
}

function enterinfinichallenge(x) {
    if (game.ininfinichallenge === 0) {
        game.ininfinichallenge = x;
    } else {
        if (game.solarspaghetti >= infinichallengegoals[x - 1]) {
            game.infinichallenge[x - 1] = true;
            game.ininfinichallenge = 0;
        } else {
            var igoontocharliekirkrule34 = confirm("Are you sure you want to reset?")
            if (igoontocharliekirkrule34) {
                game.ininfinichallenge = 0;
            }
        }
    }
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
    game.solarresets = 0
    game.americans = 1
}

function resetspaghettiwithoutgain() {
    game.americans = 1
    game.spaghetti = 0
    game.spaghettiworker = 0
    game.spaghettimanager = 0
    game.spaghettifactory = 0
    game.spaghettiupgrade = [false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false]
}

setInterval(function() {
    if (game.infiniclickers === 1) {
        clickforspaghetti()
    }
    if (game.autocollapsers === 1) {
        buysun(1)
        buysun(2)
        buysun(3)
        if (game.solarupgrade[4]) {
            buysun(4)
        }
    }
}, 1000)

setInterval(function() {
    if (game.infiniclickers === 2) {
        clickforspaghetti()
    }
    if (game.autocollapsers === 2) {
        buysun(1)
        buysun(2)
        buysun(3)
        if (game.solarupgrade[4]) {
            buysun(4)
        }
    }
}, 250)

setInterval(function() {
    if (game.infiniclickers === 3) {
        clickforspaghetti()
    }
    if (game.autocollapsers === 3) {
        buysun(1)
        buysun(2)
        buysun(3)
        if (game.solarupgrade[4]) {
            buysun(4)
        }
    }
}, 111)

setInterval(function() {
    if (game.infiniclickers === 4) {
        clickforspaghetti()
    }
    if (game.autocollapsers === 4) {
        buysun(1)
        buysun(2)
        buysun(3)
        if (game.solarupgrade[4]) {
            buysun(4)
        }
    }
}, 62)

setInterval(function() {
    if (game.infiniclickers === 5) {
        clickforspaghetti()
    }
    if (game.autocollapsers >= 5) {
        buysun(1)
        buysun(2)
        buysun(3)
        if (game.solarupgrade[4]) {
            buysun(4)
        }
        if (game.chmilestone[4]) {
            buysun(0)
        }
    }
    if (game.infiniclickers > 5) {
        if (game.spaghettiupgrade[1]) {
            game.spaghetti += 1 + spaghettigain() * (game.spaghettiupgrade[4] ? 9 : 1) * (game.spaghettiupgrade[6] ? 3 : 1) * (game.solarupgrade[2] ? 2 : 1) * (game.inchallenge === 1 ? 5 : 1) * (game.infiniclickers ** 2) / (game.solarupgrade[0] ? 3 : 1) /100
        } else {
            game.spaghetti += 1 * (game.spaghettiupgrade[4] ? 9 : 1) * (game.spaghettiupgrade[6] ? 3 : 1) * (game.solarupgrade[2] ? 2 : 1) * (game.challenge[1] ? Math.log2(game.solarspaghetti + 1) : 1) * (game.infiniclickers ** 2) / (game.solarupgrade[0] ? 3 : 1) * 4 / 100;
        }
    }
}, 40)

setInterval(function() {
    game.coordinates[0] += (game.infinilight[0] + 1) * (game.infinirockets[0] + 1) * game.infinicars[0] * infinitodistanceboost(0) * (game.coordinates[1] + 1) / 100
    game.coordinates[1] += (game.infinilight[1] + 1) * (game.infinirockets[1] + 1) * game.infinicars[1] * infinitodistanceboost(1) * (game.coordinates[2] + 1) / 100
    game.coordinates[2] += (game.infinilight[2] + 1) * (game.infinirockets[2] + 1) * game.infinicars[2] * infinitodistanceboost(2) * (game.infiniupgrade[4] ? coordinateboost(0) * coordinateboost(1) : 1) * (game.infiniupgrade[6] ? game.highestinfinispaghetti : 1) / 100
    if(game.ininfinichallenge === 5) {
        if (game.planet[0]) {
            game.spaghettiupgrade[4] = true;
            game.spaghettiupgrade[6] = true;
        }
        if (game.planet[1]) {
            game.spaghettiupgrade[0] = true;
            game.spaghettiupgrade[1] = true;
        }
        if (game.planet[2]) {
            game.spaghettiupgrade[8] = true;
        }
        if (game.planet[3]) {
            game.spaghettiupgrade[2] = true;
            game.spaghettiupgrade[3] = true;
        }
        if (game.planet[4]) {
            game.spaghettiupgrade[5] = true;
        }
        if (game.planet[5]) {
            game.spaghettiupgrade[7] = true;
            game.spaghettiupgrade[9] = true;
            game.spaghettiupgrade[11] = true;
            game.spaghettiupgrade[12] = true;
            game.spaghettiupgrade[13] = true;
            game.spaghettiupgrade[14] = true;
            game.spaghettiupgrade[15] = true;
        }
    }
    if (game.infinispaghetti > game.highestinfinispaghetti) {
        game.highestinfinispaghetti = game.infinispaghetti
    }
    if (game.spaghetti >= 1e100 && game.infinichallengeunlock < 1) {
        game.infinichallengeunlock = 1
    }
    if (game.spaghetti >= 1e120 && game.infinichallengeunlock < 2) {
        game.infinichallengeunlock = 2
    }
    if (game.spaghetti >= 1e140 && game.infinichallengeunlock < 3) {
        game.infinichallengeunlock = 3
    }
    if (game.spaghetti >= 1e166 && game.infinichallengeunlock < 4) {
        game.infinichallengeunlock = 4
    }
    if (game.spaghetti >= 1e220 && game.infinichallengeunlock < 5) {
        game.infinichallengeunlock = 5
    }
    if (game.chmilestone[3]) {
        game.planet = [true, true, true, true, true, true]
        game.nebula = [true, true, true, true]
    }
    if (game.ininfinichallenge === 1) {
        game.planet = [false, false, false, false, false, false]
        game.nebula = [false, false, true, false]
        game.solarupgrade = [false, false, false, false, game.solarupgrade[4], game.solarupgrade[5], game.solarupgrade[6], game.solarupgrade[7]]
        game.challenge = [true, true, true]
    }
    if (game.ininfinichallenge === 2) {
        if (game.inchallenge === 0) {
            game.spaghetti /= 1.024
            game.solarspaghetti /= 1.005
            game.solarspaghetti += solarspaghettigain() / 10 / 100
        } else if (game.inchallenge === 1) {
            game.spaghetti /= 1.005
        } else if (game.inchallenge === 2) {
            game.spaghetti /= 1.001
        } else if (game.inchallenge === 3) {
            game.spaghetti /= 1.002
        }
    }
    if (game.infinichallenge[1]) {
        game.solarspaghetti += 0.1
        if (game.inchallenge === 1) {
            if (game.spaghetti >= 1e16) {
                game.chmilestone[0] = true
            }
        }
        if (game.inchallenge === 2) {
            if (game.spaghetti >= 1e37) {
                game.chmilestone[1] = true
            }
            if (game.spaghetti >= 1e100) {
                game.chmilestone[3] = true
            }
        }
        if (game.ininfinichallenge === 1) {
            if (game.solarspaghetti >= 1e12) {
                game.chmilestone[2] = true
            }
        }
        if (game.ininfinichallenge === 2) {
            if (game.solarspaghetti >= 1e48) {
                game.chmilestone[4] = true
            }
        }
        if (game.ininfinichallenge === 3) {
            if (game.solarspaghetti >= 1e32) {
                game.chmilestone[5] = true
            }
        }
    }
    if (game.ininfinichallenge === 3) {
        if (game.solarresets > 2) {
            enterinfinichallenge(3)
        }
        game.firstsolarreset = true
        game.solarupgrade[7] = false
    }
    if (game.ininfinichallenge >= 4) {
        if (game.americans > 1e300) {
            game.americans = 1e300
        } else {
            game.americans *= 1 + (0.001 * (Math.log10(game.spaghetti + 10) / 5))
        }
    }
    if (game.ininfinichallenge === 5) {
        game.inchallenge = 2
        game.challenge = [true, true, true]
    }
    if (game.chmilestone[4]) {
        game.solarspaghetti += 0.9
    }
    if (game.infinichallenge[4]) {
        game.challenge = [true, true, true]
        game.solarupgrade = [true, true, true, true, true, true, true, true]
        game.firstsolarreset = true
    }
    if (game.infinichallenge[4] && game.ininfinichallenge != 3) {
        game.solarresets += 2 ** game.infinisolarizers / 100
    }
    if (game.spaghetti >= 1e280 && !game.upgrade17unlock) {
        alert("You unlocked a new upgrade in the Spaghetti tab")
        game.upgrade17unlock = true
    }
    if (!isFinite(game.spaghetti) && game.layer < 3) {
        game.layer = 3;
    }
}, 10);