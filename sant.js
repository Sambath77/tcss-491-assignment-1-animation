class Sant {
  constructor(game, x, y) {
    Object.assign(this, { game, x, y });

    //this.game.sant = this;

    // spritesheet
    this.spritesheet = ASSET_MANAGER.getAsset("./sprites/gunfire.png");

    this.animation = new Animator(
      this.spritesheet,
      28,
      44,
      34,
      43,
      4,
      0.5,
      16,
      true,
      true
    );
  }

  update() {}

  draw(ctx) {
    this.animation.drawFrame(this.game.clockTick, ctx, 100, 100, 3);
  }
}
