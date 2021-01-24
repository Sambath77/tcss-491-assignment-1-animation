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

    this.spritesheet = ASSET_MANAGER.getAsset("./sprites/place.png");
  }

  update() {}

  drawMinimap(ctx, mmX, mmY) {}

  draw(ctx) {
    ctx.drawImage(
      this.spritesheet,
      526,
      334,
      478,
      330,
      0,
      0,
      PARAMS.BLOCKWIDTH * 16,
      PARAMS.BLOCKWIDTH * 15
    );
  }
}
