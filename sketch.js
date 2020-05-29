const db = firebase.database();
var players = [];
var form, game, player;
var gameState, playerCount;
var allPlayers, plr1, plr2, plr3;

function setup() {
  createCanvas(displayWidth - 300, displayHeight - 175);
  game = new Game();
  game.start();
  db.ref("gameState").on('value', (data) => {
    gameState = data.val();
  })
}

function draw() {
  if (playerCount == 3) {
    game.updateState(1);
  }
  if (gameState == 1) {
    game.play();
  }
}