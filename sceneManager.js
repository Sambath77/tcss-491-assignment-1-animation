class SceneManager {
  constructor(game) {
    this.game = game;
    this.game.camera = this;
    this.x = 0;
    this.loadLevelOne();
  }

  loadLevelOne() {
    this.game.entities = [];

    let ghost = new Ghost(this.game, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);
    this.game.addEntity(ghost);

    let background = new BigHill(
      this.game,
      PARAMS.BLOCKWIDTH,
      PARAMS.BLOCKWIDTH
    );
    this.game.addEntity(background);

    let sant = new Sant(this.game, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);
    this.game.addEntity(sant);
  }

  draw() {}

  update() {}
}
