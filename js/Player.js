class Player {
  constructor() {
    this.index;
    this.name = null;
    this.dist = 0;
  }
  update() {
    db.ref('players/player' + this.index).update({
      index: this.index,
      name: this.name,
      dist: this.dist
    });
  }
}