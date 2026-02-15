const spaghettiupgradecost = [350, 1e4, 1e5, 1e6, 1e8, 1e9, 1.28e11, 1e13, 1e38, 1e42]

function clickforspaghetti() {
    if (game.spaghettiupgrade[1]) {
        game.spaghetti += spaghettigain() * (game.spaghettiupgrade[4] ? 9 : 1) * (game.spaghettiupgrade[6] ? 3 : 1) / 10
    } else {
        game.spaghetti += 1;
    }
}

function spaghettigain() {
  return ((game.spaghettiworker**(game.spaghettiupgrade[5] ? 2 : 1) * (game.spaghettiupgrade[7] ? game.spaghettimanager * Math.sqrt(game.spaghettiworker) : 1)) + (10 * game.spaghettifactory * (game.spaghettiupgrade[3] ? game.spaghettimanager : 1) * Math.sqrt(game.spaghettiworker))**(game.spaghettiupgrade[9] ? 3 : 1)) * (game.spaghettiupgrade[4] ? 3 : 1) * (game.spaghettiupgrade[6] ? 9 : 1);
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

setInterval(function() {
    game.spaghetti += spaghettigain() / 100
    game.spaghettiworker += game.spaghettimanager * (game.spaghettiupgrade[7] ? game.spaghettimanager * Math.sqrt(game.spaghettiworker) : 1) / 100
    if (game.spaghettifactory >= 550) {
        game.spaghettiupgradeunlock = 3
    } else if (game.spaghettimanager >= 20) {
        game.spaghettiupgradeunlock = 2
    } else if (game.spaghettiworker >= 10) {
        game.spaghettiupgradeunlock = 1
    }
    if (game.spaghettiupgrade[8]) {
        buyspaghettiworker()
        buyspaghettifactory()
        buyspaghettimanager()
    }
}, 10)