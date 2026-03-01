const spaghettiupgradecost = [350, 1e4, 1e5, 1e6, 1e8, 1e9, 1.28e11, 1e13, 1e38, 1e42, 1e47, 1e10, 1e50, 1.28e11, 1e35]

function clickforspaghetti() {
    if (game.spaghettiupgrade[1]) {
        game.spaghetti += 1 + spaghettigain() * (game.spaghettiupgrade[4] ? 9 : 1) * (game.spaghettiupgrade[6] ? 3 : 1) * (game.solarupgrade[2] ? 2 : 1) * (game.inchallenge === 1 ? 5 : 1) / (game.solarupgrade[0] ? 3 : 1) / 10
    } else {
        game.spaghetti += 1 * (game.spaghettiupgrade[4] ? 9 : 1) * (game.spaghettiupgrade[6] ? 3 : 1) * (game.solarupgrade[2] ? 2 : 1) * (game.challenge[1] ? Math.log2(game.solarspaghetti + 2) : 1) / (game.solarupgrade[0] ? 3 : 1);
    }
}

function spaghettigain() {
  return (((game.spaghettiworker * (game.inchallenge === 2 ? 0 : 1))**(game.spaghettiupgrade[5] ? 2 : 1) * (game.spaghettiupgrade[7] ? factoryboost() : 1)) + (10 * game.spaghettifactory * factoryboost())**(game.spaghettiupgrade[9] ? 3 : 1)) * (game.spaghettiupgrade[4] ? 3 : 1) * (game.spaghettiupgrade[6] ? 9 : 1) * (game.solarupgrade[0] ? 3 : 1) * (game.spaghetti < 1e13 && game.spaghettiupgrade[13] ? 3 : 1) * (game.solarupgrade[1] ? 2 : 1) * (game.challenge[1] ? Math.log2(game.solarspaghetti + 2) : 1) * (game.sun[0] >= 1 ? fettuccineboost() : 1) * coordinateboost(0) * (game.infiniupgrade[0] ? 2 : 1) * solarfettuccineboost() * (game.infinichallenge[2] ? Math.log10(game.solarresets + 10) : 1) * (game.chmilestone[1] ? 5 : 1) * (game.chmilestone[2] ? Math.cbrt(game.highestinfinispaghetti) : 1) * (game.infiniupgrade[7] ? 10 : 1) / (game.ininfinichallenge === 4 ? game.americans : 1);
}

function spaghettiworkergain() {
    return game.spaghettimanager * (game.spaghettiupgrade[7] ? factoryboost() : 1) * (game.solarupgrade[2] ? 3 : 1) * (game.spaghetti < 1e45 && game.spaghettiupgrade[14] ? 3 : 1) * (game.ininfinichallenge === 1 ? 5 : 1) * (game.infinichallenge[0] ? 2 : 1) * solarfettuccineboost()
}

function spaghettiworkercost() {
    return (game.spaghettiupgrade[2] ? 1 : 1.1)**game.spaghettiworker*20;
}

function spaghettifactorycost() {
    return (game.spaghettiupgrade[2] ? (game.spaghettiupgrade[8] ? 1.05 : 1.15) : 1.25)**game.spaghettifactory*400;
}

function spaghettimanagercost() {
    return (game.spaghettiupgrade[2] ? (game.spaghettiupgrade[8] ? 1.25 : 1.5) : 2)**game.spaghettimanager*5e3;
}

function buyspaghettiworker() {
    if (game.spaghetti >= spaghettiworkercost()) {
        if (!game.spaghettiupgrade[8]) {
            game.spaghetti -= spaghettiworkercost();
        }
        game.spaghettiworker++
    }
}

function buyspaghettifactory() {
    if (game.spaghetti >= spaghettifactorycost()) {
        if (!game.spaghettiupgrade[8]) {
            game.spaghetti -= spaghettifactorycost();
        }
        game.spaghettifactory++
    }
}

function buyspaghettimanager() {
    if (game.spaghetti >= spaghettimanagercost()) {
        if (!game.spaghettiupgrade[8]) {
            game.spaghetti -= spaghettimanagercost();
        }
        game.spaghettimanager++
    }
}

function buyspaghettiupgrade(x) {
    if(game.spaghetti >= spaghettiupgradecost[x]) {
        if(!game.spaghettiupgrade[x]) {
            game.spaghetti -= spaghettiupgradecost[x];
            game.spaghettiupgrade[x] = true;
        }
    }
}

function buyworkerupgrade() {
    if(game.spaghettiworker >= 3.16e3) {
        if(!game.spaghettiupgrade[15]) {
            game.spaghettiworker -= 3.16e3;
            game.spaghettiupgrade[15] = true;
        }
    }
}

function buyextraupgrade() {
    if(game.spaghetti >= 1e280) {
        if(!game.spaghettiupgrade[16]) {
            game.spaghetti -= 1e280
            game.spaghettiupgrade[16] = true;
        }
    }
}

function factoryboost() {
    if (game.inchallenge === 1) {
        return 1 / ((game.spaghettiupgrade[3] ? game.spaghettimanager : 1) * Math.sqrt(game.spaghettiworker) * (game.spaghettiupgrade[11] ? Math.log10(game.spaghettifactory + 10) : 1) ** 2 + 1);
    } else if (game.inchallenge === 3) {
        return 1;
    } else {
        return (game.spaghettiupgrade[3] ? game.spaghettimanager : 1) * Math.sqrt(game.spaghettiworker) * (game.spaghettiupgrade[11] ? Math.log10(game.spaghettifactory + 10) : 1) * (game.solarupgrade[3] ? Math.cbrt(game.solarspaghetti + 1) : 1) * (game.ininfinichallenge === 4 ? 5 : 1);
    }
}

setInterval(function() {
    game.spaghetti += spaghettigain() / 100
    game.spaghettiworker += spaghettiworkergain() * (game.inchallenge === 2 ? 0 : 1) / 100
    if (game.spaghetti >= 1e47 || game.spaghettiupgradeunlock === 4) {
        game.spaghettiupgradeunlock = 4
    } else if (game.spaghettifactory >= 550) {
        game.spaghettiupgradeunlock = 3
    } else if (game.spaghettimanager >= 20) {
        game.spaghettiupgradeunlock = 2
    } else if (game.spaghettiworker >= 10) {
        game.spaghettiupgradeunlock = 1
    }
    if (game.spaghettiupgrade[8]) {
        buyspaghettiworker()
        buyspaghettifactory()
        buyspaghettifactory()
        buyspaghettifactory()
        buyspaghettimanager()
    }
    if (game.spaghettiupgrade[10] && game.layer < 1) {
        game.layer = 1;
    }
    if (game.spaghettiupgrade[15]) {
        game.spaghettimanager += Math.sqrt(game.spaghettifactory + 1) * solarfettuccineboost() * (game.infinichallenge[3] ? Math.log10(factoryboost() + 10) : 1) / 100
    }
    if (game.spaghetti > game.highestspaghetti) {
        game.highestspaghetti = game.spaghetti
    }
}, 10)