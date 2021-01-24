class Sant {
  constructor(game, x, y) {
    Object.assign(this, { game, x, y });

    //this.game.sant = this;

    // spritesheet
    this.animation = [];
    this.spritesheet = ASSET_MANAGER.getAsset("./sprites/gunfire.png");

    this.animation[0] = new Animator(
      this.spritesheet,
      28,
      42,
      33,
      41,
      4,
      0.5,
      9,
      true,
      true
    );
    this.animation[1] = new Animator(
      this.spritesheet,
      157,
      122,
      36,
      47,
      3,
      0.5,
      10,
      true,
      true
    );

    this.animation[2] = new Animator(
      this.spritesheet,
      25,
      202,
      41,
      31,
      3,
      0.5,
      20,
      true,
      true
    );
  }

  update() {}

  draw(ctx) {
    this.animation[0].drawFrame(this.game.clockTick, ctx, 300, 525, 3);
    this.animation[1].drawFrame(this.game.clockTick, ctx, 500, 518, 3);
    this.animation[2].drawFrame(this.game.clockTick, ctx, 100, 550, 3);
  }
}
