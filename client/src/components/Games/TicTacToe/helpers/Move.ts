import { IMove } from '../types';

declare global {
  interface Crypto {
    randomUUID: () => string;
  }
}

class Move implements IMove{
  player: string;
  row: number;
  col: number;
  uuid: string;

  constructor(player: string, row: number, col: number)
  {
    this.player = player;
    this.row = row;
    this.col = col;
    this.uuid = crypto.randomUUID();
  }

}

export {Move};