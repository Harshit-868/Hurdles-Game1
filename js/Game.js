class Game {
  constructor() {}
  
  updateState(state) {
    db.ref('/').update({
      gameState: state
    });
  }

  async start() {
    player = new Player();
    form = new Form();
    form.display();
    
    await db.ref('index').on('value', (data) => {
      playerCount = data.val();
    });

    plr1 = createSprite(200, 400, 75, 75);
    plr2 = createSprite(200, 550, 75, 75);
    plr3 = createSprite(200, 700, 75, 75);
    players = [plr1, plr2, plr3];
  }  
  play() {
    form.hide();

    db.ref('players').on("value", (data) => {
      allPlayers = data.val();
    });
    
    if (allPlayers != undefined) {
      var x;
      var y = 0;
      var index = 0;
      for (var plr in allPlayers) {
        index++;
        x = displayWidth + allPlayers[plr].dist;
        y += 150;
        players[index - 1].x = x;
        players[index - 1].y = y;
        if (player.index == index) {
          players[index-1].shapeColor = "red";
          camera.position.x = players[index - 1].x + 400;
          camera.position.y = displayHeight/2 - 100;
        }
      }
    }

    if (keyIsDown(UP_ARROW) && player.index !== null) {
      player.dist += 30;
      player.update();
    }
    clear();
    drawSprites();
  }
}