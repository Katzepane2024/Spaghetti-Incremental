var tab = 0
var layer = 0
var subtab = [0, 0]
const ssbuyablecosts = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]

const newGame = {
  //Misc:
  superspaghetti: 0, //Can't be gained offline
  ssbuyables: [
    0, //Upgrade offline time capacity [300 → 600 → 1200 → 2400 → 3600 → 7200 → 14400 → 43200 → 86400 → infinity]
    0, //Global speed [/100 → /80 → /65 → /55 → /50]
    0, //Super Spaghetti gain [0.0015/s → 0.002/s → 0.003/s → 0.004/s → 0.006/s → 0.008/s → 0.01/s]
    0, //Spaghetti gain [x1 → x1.1 → x1.3 → x1.7 → x2]
    0, //Spaghetti click gain [x1 → x1.5]
    0, //Spaghetti worker production [x1 → x1.5]
    0, //Spaghetti factory production [x1 → x1.5]
    0, //Spaghetti manager production [x1 → x1.5]
    0, //Solar Spaghetti gain [x1 → x1.2 → x1.4 → x1.6 → x1.8 → x2]
    0, //Fettuccine gain [x1 → x2 → x5 → x10]
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    layer: 0,

  //Spaghetti:
  spaghetti: 0,
  spaghettiworker: 0,
  spaghettimanager: 0,
  spaghettifactory: 0,
  spaghettiupgrade: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  spaghettiupgradeunlock: 0,

  //Solar Spaghetti
  solarspaghetti: 0,
  firstsolarreset: false,
  planet: [false, false, false, false, false, false],
  sun: [0, 0, 0, 0, 0],
  fettuccine: 0,
  nebula: [false, false, false, false],
  solarupgrade: [false, false, false, false, false, false, false, false],
  challenge: [false, false, false],
  inchallenge: 0,

  //Infinispaghetti
  infinispaghetti: 0,
  firstinfinitereset: false,
};
  
  const game = {};

  function beautify(x) {
    if(!isFinite(x)) {
      return "INFINITY";
    } else if (x >= 1000) {
      return "e" + Math.log10(x).toFixed(2)
    } else {
      return Math.floor(100 * x) / 100
    }
  }

  function getOfflineTime() {
    game.storedOfflineTime += Date.now() - game.offlineTimeInterval
  }

  setInterval(function () {
    save();
    game.offlineTimeInterval = Date.now()
  }, 10000);

  function save() {
    localStorage.setItem("Save", JSON.stringify(game));
  }
  
  function load() {
    reset();
    var loadgame = JSON.parse(localStorage.getItem("Save"));
    getOfflineTime()
    if (loadgame !== null) loadGame(loadgame);
    setInterval(() => loop(Date.now() - game.lastTick));
  }
  
  function loadGame(loadgame) {
    for (var i in loadgame) game[i] = loadgame[i];
  }
  
  function reset() {
    for (var i in newGame) game[i] = newGame[i];
  }
  
  function resetConf() {
    if (!confirm("are you sure you want to reset the game?")) return;
    reset();
  }
  
  function loop(ms) {
    var sec = ms / 1000;
    if (game.storedOfflineTime >= game.maxOfflineTime) {
      game.storedOfflineTime = game.maxOfflineTime;
    }
    render();
  }
  
  function render() {
    var x = document.getElementsByTagName("text");
    for (var i = 0; i < x.length; i++) {
      if (x[i].innerHTML !== String(eval(x[i].attributes.value.value)))
        x[i].innerHTML = String(eval(x[i].attributes.value.value));
    }
    var y = document.getElementsByTagName("sec");
    for (var j = 0; j < y.length; j++) {
      if (
        y[j].style.display !== eval(y[j].attributes.vif.value) ? "block" : "none"
      )
        y[j].style.display = eval(y[j].attributes.vif.value) ? "block" : "none";
    }
  }

  load();  