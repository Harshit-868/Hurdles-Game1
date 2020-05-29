class Form {
  constructor() {
    this.title = createElement('h1', "Multi-Player Hurdles Game");
    this.input = createInput("Player_name", 'text');
    this.btn = createButton("Play!");
    this.msg = createElement('h2');
  }
  display() {
    background(150, 225, 255);
    this.title.position(displayWidth/2 - 300, 75);
    this.input.position(displayWidth/2 - 140, displayHeight/2 - 50);
    this.btn.position(displayWidth/2 - 75, displayHeight/2 + 25);

    this.btn.mousePressed(() => {
      this.input.hide();
      this.btn.hide();

      playerCount ++;
      db.ref('/').update({
        index: playerCount
      });

      player.index = playerCount;
      player.name = this.input.value();

      player.update();
      
      this.title.html("Hello, " + this.input.value() + "!");
      this.title.position(displayWidth/2 - 275, 75);
      this.msg.html("Waiting for players...");
      this.msg.position(displayWidth/2 - 225, displayHeight/2 - 100);
    });
  }

  hide() {
    this.title.hide();
    this.msg.hide();
  }
}