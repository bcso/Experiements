class Move {
    constructor(player, row, col)
    {
      this.player = player;
      this.row = row;
      this.col = col;
      this.uuid = crypto.randomUUID();
    }
}

export {Move};