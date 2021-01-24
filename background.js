class BigHill {
  constructor(game, x, y) {
    Object.assign(this, { game, x, y });

    this.spritesheet = ASSET_MANAGER.getAsset("./sprites/background.png");
  }

  update() {}

  drawMinimap(ctx, mmX, mmY) {}

  draw(ctx) {
    ctx.drawImage(
      this.spritesheet,
      0,
      50,
      50,
      17,
      0,
      650,
      PARAMS.BLOCKWIDTH * 16,
      PARAMS.BLOCKWIDTH * 2.5
    );
  }
}

class Ghost {
  constructor(game, x, y) {
    Object.assign(this, { game, x, y });

    this.spritesheet = ASSET_MANAGER.getAsset("./sprites/ghost.png");
  }

  update() {}

  drawMinimap(ctx, mmX, mmY) {}

  draw(ctx) {
    ctx.drawImage(
      this.spritesheet,
      0,
      0,
      284,
      189,
      0,
      0,
      PARAMS.BLOCKWIDTH * 16,
      PARAMS.BLOCKWIDTH * 16
    );
  }
}

class Cute {
  constructor(game, x, y) {
    Object.assign(this, { game, x, y });

    this.spritesheet = ASSET_MANAGER.getAsset("./sprites/cute.png");
  }

  update() {}

  drawMinimap(ctx, mmX, mmY) {}

  draw(ctx) {
    ctx.drawImage(
      this.spritesheet,
      0,
      0,
      120,
      90,
      0,
      0,
      PARAMS.BLOCKWIDTH * 16,
      PARAMS.BLOCKWIDTH * 16
    );
  }
}
