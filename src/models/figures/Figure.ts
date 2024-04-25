import logo from "../assets/black-bishop.png";
import { Cell } from "../Cell";
import { Colors } from "../Colors";

export enum FigureName {
  FIGURE = "Figure",
  KING = "King",
  KNIGHT = "Knight",
  PAWN = "Pawn",
  QUEEN = "Queen",
  ROOK = "Rook",
  BISHOP = "Bishop",
}

export class Figure {
  color: Colors;
  logo: typeof logo | null;
  cell: Cell;
  name: FigureName;
  id: number;

  constructor(color: Colors, cell: Cell) {
    this.cell = cell;
    this.color = color;
    this.cell.figure = this; // put figure on cell as current object
    this.logo = null;
    this.name = FigureName.FIGURE;
    this.id = Math.random();
  }

  canMove(target: Cell): boolean {
    if (target.figure?.color === this.color) return false;
    if (target.figure?.name === FigureName.KING) return false;

    return true;
  }

  moveFigure(target: Cell) {}
}
