const planetcost = [3, 100, 200, 600, 8.91e4, 1e7]
const nebulacost = [10, 300, 1200, 1e9]
const solarupgradecost = [2, 200, 600, 3.16e5, 1e13, 3.16e21, 3.16e23, 3.16e70]
const challengegoals = [1e10, 3.16e13, 1e15]
var starcap = 50

function solarspaghettireset() {
    if (game.inchallenge === 0 || game.ininfinichallenge === 5) {
        if (game.spaghetti >= 1e47) {
            if (!game.firstsolarreset) {
                var chickennuggetpenilechopper = confirm("Are you sure you want to reset?")
            } else {
                var chickennuggetpenilechopper = true
            }
            if (chickennuggetpenilechopper) {
                game.solarspaghetti += solarspaghettigain()
                game.solarresets += 1
                if (!game.spaghettiupgrade[16]) {
                    game.americans = 1
                    game.spaghetti = 0
                    game.spaghettiworker = 0
                    game.spaghettimanager = 0
                    game.spaghettifactory = 0
                    game.spaghettiupgrade = [false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false]
                }
                if (!game.firstsolarreset) {
                    alert("You have enough spaghetti to completely fill the solar system from the Sun to the Oort Cloud. The ball of spaghetti compressed into a new sun. You're not just a chef, you're a creator of worlds.")
                    game.firstsolarreset = true
                }
            }
        }
    } else {
        alert("Bro chill you can't")
    }
}

function solarspaghettigain() {
    if(game.firstsolarreset) {
        if(game.spaghetti <= 1e50){
            return (Math.floor((game.spaghetti / 1e47) / (game.spaghetti >= 1e48 ? Math.cbrt(game.spaghetti / 1e48) : 1))) * (game.solarupgrade[5] ? fettuccineboost() : 1) * (game.infiniupgrade[0] ? 2 : 1) * coordinateboost(1) * solarfettuccineboost() * (game.infinichallenge[2] ? Math.log10(Math.cbrt(game.fettuccine) + 10) : 1) * (game.chmilestone[2] ? Math.cbrt(game.highestinfinispaghetti) : 1)
        } else {
            if (game.spaghetti < 1e52) {
                return 300 * (game.solarupgrade[5] ? fettuccineboost() : 1) * (game.infiniupgrade[0] ? 2 : 1) * coordinateboost(1) * solarfettuccineboost() * (game.infinichallenge[2] ? Math.log10(Math.cbrt(game.fettuccine) + 10) * Math.log10(game.solarresets + 10) : 1) * (game.chmilestone[2] ? Math.cbrt(game.highestinfinispaghetti) : 1);
            } else if (game.spaghetti < 1e54) {
                return 600 * (game.solarupgrade[5] ? fettuccineboost() : 1) * (game.infiniupgrade[0] ? 2 : 1) * coordinateboost(1) * solarfettuccineboost() * (game.infinichallenge[2] ? Math.log10(Math.cbrt(game.fettuccine) + 10) * Math.log10(game.solarresets + 10) : 1) * (game.chmilestone[2] ? Math.cbrt(game.highestinfinispaghetti) : 1);
            } else if (game.spaghetti < 1e56) {
                return 1200 * (game.solarupgrade[5] ? fettuccineboost() : 1) * (game.infiniupgrade[0] ? 2 : 1) * coordinateboost(1) * solarfettuccineboost() * (game.infinichallenge[2] ? Math.log10(Math.cbrt(game.fettuccine) + 10) * Math.log10(game.solarresets + 10) : 1) * (game.chmilestone[2] ? Math.cbrt(game.highestinfinispaghetti) : 1);
            } else if (game.spaghetti < 1e58) {
                return 2400 * (game.solarupgrade[5] ? fettuccineboost() : 1) * (game.infiniupgrade[0] ? 2 : 1) * coordinateboost(1) * solarfettuccineboost() * (game.infinichallenge[2] ? Math.log10(Math.cbrt(game.fettuccine) + 10) * Math.log10(game.solarresets + 10) : 1) * (game.chmilestone[2] ? Math.cbrt(game.highestinfinispaghetti) : 1);
            } else if (game.spaghetti < 1e60) {
                return 4800 * (game.solarupgrade[5] ? fettuccineboost() : 1) * (game.infiniupgrade[0] ? 2 : 1) * coordinateboost(1) * solarfettuccineboost() * (game.infinichallenge[2] ? Math.log10(Math.cbrt(game.fettuccine) + 10) * Math.log10(game.solarresets + 10) : 1) * (game.chmilestone[2] ? Math.cbrt(game.highestinfinispaghetti) : 1);
            } else if (game.spaghetti < 1e62) {
                return 9600 * (game.solarupgrade[5] ? fettuccineboost() : 1) * (game.infiniupgrade[0] ? 2 : 1) * coordinateboost(1) * solarfettuccineboost() * (game.infinichallenge[2] ? Math.log10(Math.cbrt(game.fettuccine) + 10) * Math.log10(game.solarresets + 10) : 1) * (game.chmilestone[2] ? Math.cbrt(game.highestinfinispaghetti) : 1);
            } else if (game.spaghetti < 1e64) {
                return 19200 * (game.solarupgrade[5] ? fettuccineboost() : 1) * (game.infiniupgrade[0] ? 2 : 1) * coordinateboost(1) * solarfettuccineboost() * (game.infinichallenge[2] ? Math.log10(Math.cbrt(game.fettuccine) + 10) * Math.log10(game.solarresets + 10) : 1) * (game.chmilestone[2] ? Math.cbrt(game.highestinfinispaghetti) : 1);
            } else if (game.spaghetti < 1e66) {
                return 38400 * (game.solarupgrade[5] ? fettuccineboost() : 1) * (game.infiniupgrade[0] ? 2 : 1) * coordinateboost(1) * solarfettuccineboost() * (game.infinichallenge[2] ? Math.log10(Math.cbrt(game.fettuccine) + 10) * Math.log10(game.solarresets + 10) : 1) * (game.chmilestone[2] ? Math.cbrt(game.highestinfinispaghetti) : 1);
            } else if (game.spaghetti < 1e68) {
                return 76800 * (game.solarupgrade[5] ? fettuccineboost() : 1) * (game.infiniupgrade[0] ? 2 : 1) * coordinateboost(1) * solarfettuccineboost() * (game.infinichallenge[2] ? Math.log10(Math.cbrt(game.fettuccine) + 10) * Math.log10(game.solarresets + 10) : 1) * (game.chmilestone[2] ? Math.cbrt(game.highestinfinispaghetti) : 1);
            } else {
                return 1e5 * (1.2**(Math.log2(game.spaghetti / 1e68))) * (game.solarupgrade[5] ? fettuccineboost() : 1) * (game.infiniupgrade[0] ? 2 : 1) * coordinateboost(1) * solarfettuccineboost() * (game.infinichallenge[2] ? Math.log10(Math.cbrt(game.fettuccine) + 10) * Math.log10(game.solarresets + 10) : 1) * (game.chmilestone[2] ? Math.cbrt(game.highestinfinispaghetti) : 1);
            }
        }
    } else {
        return Math.round(5 * (game.solarupgrade[5] ? fettuccineboost() : 1) * (game.infiniupgrade[0] ? 2 : 1) * coordinateboost(1) * solarfettuccineboost() * (game.infinichallenge[2] ? Math.log10(Math.cbrt(game.fettuccine) + 10) * Math.log10(game.solarresets + 10) : 1) * (game.chmilestone[2] ? Math.cbrt(game.highestinfinispaghetti) : 1));
    }
}

function nextspaghetti(x) {
    if (x === 0) {
        if (game.spaghetti < 1e50) {
            return 300 * (game.solarupgrade[5] ? fettuccineboost() : 1) * (game.infiniupgrade[0] ? 2 : 1) * coordinateboost(1) * solarfettuccineboost() * (game.infinichallenge[2] ? Math.log10(Math.cbrt(game.fettuccine) + 10) * Math.log10(game.solarresets + 10) : 1) * (game.chmilestone[2] ? Math.cbrt(game.highestinfinispaghetti) : 1);
        } else if (game.spaghetti < 1e52) {
            return 600 * (game.solarupgrade[5] ? fettuccineboost() : 1) * (game.infiniupgrade[0] ? 2 : 1) * coordinateboost(1) * solarfettuccineboost() * (game.infinichallenge[2] ? Math.log10(Math.cbrt(game.fettuccine) + 10) * Math.log10(game.solarresets + 10) : 1) * (game.chmilestone[2] ? Math.cbrt(game.highestinfinispaghetti) : 1);
        } else if (game.spaghetti < 1e54) {
            return 1200 * (game.solarupgrade[5] ? fettuccineboost() : 1) * (game.infiniupgrade[0] ? 2 : 1) * coordinateboost(1) * solarfettuccineboost() * (game.infinichallenge[2] ? Math.log10(Math.cbrt(game.fettuccine) + 10) * Math.log10(game.solarresets + 10) : 1) * (game.chmilestone[2] ? Math.cbrt(game.highestinfinispaghetti) : 1);
        } else if (game.spaghetti < 1e56) {
            return 2400 * (game.solarupgrade[5] ? fettuccineboost() : 1) * (game.infiniupgrade[0] ? 2 : 1) * coordinateboost(1) * solarfettuccineboost() * (game.infinichallenge[2] ? Math.log10(Math.cbrt(game.fettuccine) + 10) * Math.log10(game.solarresets + 10) : 1) * (game.chmilestone[2] ? Math.cbrt(game.highestinfinispaghetti) : 1);
        } else if (game.spaghetti < 1e58) {
            return 4800 * (game.solarupgrade[5] ? fettuccineboost() : 1) * (game.infiniupgrade[0] ? 2 : 1) * coordinateboost(1) * solarfettuccineboost() * (game.infinichallenge[2] ? Math.log10(Math.cbrt(game.fettuccine) + 10) * Math.log10(game.solarresets + 10) : 1) * (game.chmilestone[2] ? Math.cbrt(game.highestinfinispaghetti) : 1);
        } else if (game.spaghetti < 1e60) {
            return 9600 * (game.solarupgrade[5] ? fettuccineboost() : 1) * (game.infiniupgrade[0] ? 2 : 1) * coordinateboost(1) * solarfettuccineboost() * (game.infinichallenge[2] ? Math.log10(Math.cbrt(game.fettuccine) + 10) * Math.log10(game.solarresets + 10) : 1) * (game.chmilestone[2] ? Math.cbrt(game.highestinfinispaghetti) : 1);
        } else if (game.spaghetti < 1e62) {
            return 19200 * (game.solarupgrade[5] ? fettuccineboost() : 1) * (game.infiniupgrade[0] ? 2 : 1) * coordinateboost(1) * solarfettuccineboost() * (game.infinichallenge[2] ? Math.log10(Math.cbrt(game.fettuccine) + 10) * Math.log10(game.solarresets + 10) : 1) * (game.chmilestone[2] ? Math.cbrt(game.highestinfinispaghetti) : 1);
        } else if (game.spaghetti < 1e64) {
            return 38400 * (game.solarupgrade[5] ? fettuccineboost() : 1) * (game.infiniupgrade[0] ? 2 : 1) * coordinateboost(1) * solarfettuccineboost() * (game.infinichallenge[2] ? Math.log10(Math.cbrt(game.fettuccine) + 10) * Math.log10(game.solarresets + 10) : 1) * (game.chmilestone[2] ? Math.cbrt(game.highestinfinispaghetti) : 1);
        } else if (game.spaghetti < 1e66) {
            return 76800 * (game.solarupgrade[5] ? fettuccineboost() : 1) * (game.infiniupgrade[0] ? 2 : 1) * coordinateboost(1) * solarfettuccineboost() * (game.infinichallenge[2] ? Math.log10(Math.cbrt(game.fettuccine) + 10) * Math.log10(game.solarresets + 10) : 1) * (game.chmilestone[2] ? Math.cbrt(game.highestinfinispaghetti) : 1);
        } else {
            return 8008135
        }
    } else if (x === 1) {
        if (game.spaghetti < 1e50) {
            return 1e50;
        } else if (game.spaghetti < 1e52) {
            return 1e52;
        } else if (game.spaghetti < 1e54) {
            return 1e54;
        } else if (game.spaghetti < 1e56) {
            return 1e56;
        } else if (game.spaghetti < 1e58) {
            return 1e58;
        } else if (game.spaghetti < 1e60) {
            return 1e60;
        } else if (game.spaghetti < 1e62) {
            return 1e62;
        } else if (game.spaghetti < 1e64) {
            return 1e64;
        } else if (game.spaghetti < 1e66) {
            return 1e66;
        } else {
            return 1738;
        }
    }
}

function buysolarupgrade(x) {
    if(x < 4) {
        if(game.solarspaghetti >= solarupgradecost[x]) {
            if(!game.solarupgrade[x]) {
                game.solarspaghetti -= solarupgradecost[x];
              game.solarupgrade[x] = true;
            }
        }
    } else {
        if(game.fettuccine >= solarupgradecost[x]) {
            if(!game.solarupgrade[x]) {
                game.fettuccine -= solarupgradecost[x];
              game.solarupgrade[x] = true;
            }
        }
    }
}

function buyplanet(x) {
    if(game.solarspaghetti >= planetcost[x]) {
        if(!game.planet[x]) {
            game.solarspaghetti -= planetcost[x];
            game.planet[x] = true;
        }
    }
}

function suncost(x) {
    if (x === 0) {
        return 10 * (game.sun[0] ** 2) + 10;
    } else if (x === 1) {
        return game.sun[1] ** 3 + 100;
    } else if (x === 2) {
        return game.sun[2] ** 4 + 1e4;
    } else if (x === 3) {
        return game.sun[3] ** 6 + 1e8;
    } else if (x === 4) {
        return (1.2 ** (1 + game.sun[4])) * 1e13;
    } else {
        return "How tf";
    }
}

function buysun(x) {
    if (game.sun[x] < starcap) {
        if (x === 0) {
            if (game.solarspaghetti >= suncost(x)) {
                game.solarspaghetti -= suncost(x);
                game.sun[x]++
            }
        } else {
            if (game.fettuccine >= suncost(x)) {
                game.fettuccine -= suncost(x);
                game.sun[x]++
            }
        }
    }
}

function buynebula(x) {
    if(game.solarspaghetti >= nebulacost[x]) {
        if(!game.nebula[x]) {
            game.solarspaghetti -= nebulacost[x];
            game.nebula[x] = true;
        }
    }
}

function fettuccinebasegain() {
    return ((game.sun[0] * (1 + game.sun[1]) * (1 + game.sun[2])) ** (1 + (game.sun[3] * (1 + (game.sun[4] / 25)) / 50))) * (game.solarupgrade[1] ? 2 : 1) * (game.spaghettiupgrade[12] ? Math.log(10 + game.spaghetti * 1.528) : 1) * (game.solarupgrade[4] ? 2 : 1) * (game.ininfinichallenge === 1 ? 5 : 1) * (game.infinichallenge[0] ? 5 : 1) * (game.chmilestone[0] ? Math.log2(game.coordinates[0] + 2) : 1);
}

function fettuccineboost() {
    return 1.74941 * Math.log10(2 + game.fettuccine);
}

function solarfettuccinecost() {
    return 2 ** game.solarfettuccine * 1e80;
}

function buysolarfettuccine() {
    if(game.fettuccine >= solarfettuccinecost()) {
        game.fettuccine -= solarfettuccinecost();
        game.solarfettuccine++;
    }
}

function solarfettuccineboost() {
    return Math.cbrt(2) ** game.solarfettuccine;
}

function enterchallenge(x) {
    if (game.inchallenge === 0) {
        game.inchallenge = x;
    } else {
        if (game.spaghetti >= challengegoals[x - 1]) {
            game.challenge[x - 1] = true;
            game.inchallenge = 0;
        } else {
            var chickennuggetpenilechopper2 = confirm("Are you sure you want to reset?")
            if (chickennuggetpenilechopper2) {
                game.inchallenge = 0;
            }
        }
    }
    game.spaghetti = 0
    game.spaghettiworker = 0
    game.spaghettimanager = 0
    game.spaghettifactory = 0
    game.spaghettiupgrade = [false, false, false, false, false, false, false, false, false, false, true, false, false, false, false]
    game.americans = 1
}

setInterval(function() {
    game.fettuccine += fettuccinebasegain() / 100
    if(game.inchallenge === 0) {
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
            if (game.infinichallenge[4]) {
                game.spaghettiupgrade[15] = true;
            }
            if (game.spaghettiworker < 1) {
                game.spaghettiworker = 1
            }
            if (game.spaghettifactory < 1) {
                game.spaghettifactory = 1
            }
            if (game.spaghettimanager < 1) {
                game.spaghettimanager = 1
            }
        }
    }
    if (game.inchallenge === 1) {
        game.spaghettiupgrade[7] = true;
    }
    if (game.infiniupgrade[4]) {
        starcap = 110
    } else if (game.infiniupgrade[3]) {
        starcap = 108
    } else if (game.infinichallenge[0]) {
        starcap = 107
    } else if (game.solarupgrade[6]) {
        starcap = 100
    } else {
        starcap = 50
    }
    if (game.fettuccine > game.spaghetti) {
        game.fettuccine /= 1.02
    }
    if (game.spaghetti > 1e47) {
        if (game.solarupgrade[7]) {
            game.solarspaghetti += solarspaghettigain() * (game.ininfinichallenge === 3 ? 0 : 1) / 10 / 100
        }
    }
    if (game.inchallenge === 3) {
        game.spaghettiupgrade = [game.spaghettiupgrade[0], game.spaghettiupgrade[1], false, false, false, game.spaghettiupgrade[5], false, false, false, false, true, true, true, true, true, game.spaghettiupgrade[15], false]
        if (game.spaghetti > 50) {
            game.spaghetti /= 1.1
        }
        if (game.spaghetti > 1e15 && game.inchallenge === 3) {
            enterchallenge(3)
        }
    }
    if (game.challenge[2] && game.layer < 2) {
        game.layer = 2;
    }
    if (game.solarspaghetti > game.highestsolarspaghetti) {
        game.highestsolarspaghetti = game.solarspaghetti
    }
}, 10);