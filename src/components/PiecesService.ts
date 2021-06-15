import wR from "./pieces/wR.png";
import wB from "./pieces/wB.png";
import wN from "./pieces/wN.png";
import wK from "./pieces/wK.png";
import wQ from "./pieces/wQ.png";
import wP from "./pieces/wP.png";
import bR from "./pieces/br.png";
import bB from "./pieces/bb.png";
import bN from "./pieces/bn.png";
import bQ from "./pieces/bq.png";
import bP from "./pieces/bp.png";
import bK from "./pieces/bk.png";

export interface PieceType {
  name: string;
  color: string;
  presentation: string;
  image: string;
  moves: number[];
}

export const WHITE_PAWN = {
  name: "White Pawn",
  color: "WHITE",
  presentation: "P",
  image: wP,
  moves: [8],
};
export const BLACK_PAWN = {
  name: "Black Pawn",
  color: "BLACK",
  presentation: "p",
  image: bP,
  moves: [-8],
};
export const WHITE_KNIGHT = {
  name: "White Knight",
  color: "WHITE",
  presentation: "N",
  image: wN,
  moves: [6, 10, -6, -10, -15, -17, 15, 17],
};
export const BLACK_KNIGHT = {
  name: "Black Knight",
  color: "BLACK",
  presentation: "n",
  image: bN,
  moves: [6, 10, -6, -10, -15, -17, 15, 17],
};
export const WHITE_ROOK = {
  name: "White Rook",
  color: "WHITE",
  presentation: "R",
  image: wR,
  moves: [8, 16, 24, 32, 40, 48, 56, 64, -8, -16, -24, -32, -40, -48, -56, -64],
};
export const BLACK_ROOK = {
  name: "Black Rook",
  color: "BLACK",
  presentation: "r",
  image: bR,
  moves: [8, 16, 24, 32, 40, 48, 56, 64, -8, -16, -24, -32, -40, -48, -56, -64],
};
export const WHITE_BISHOP = {
  name: "White Bishop",
  color: "WHITE",
  presentation: "B",
  image: wB,
  moves: [],
};
export const BLACK_BISHOP = {
  name: "Black Bishop",
  color: "BLACK",
  presentation: "b",
  image: bB,
  moves: [],
};
export const WHITE_QUEEN = {
  name: "White Queen",
  color: "WHITE",
  presentation: "Q",
  image: wQ,
  moves: [],
};
export const BLACK_QUEEN = {
  name: "Black Queen",
  color: "BLACK",
  presentation: "q",
  image: bQ,
  moves: [],
};
export const WHITE_KING = {
  name: "White King",
  color: "WHITE",
  presentation: "K",
  image: wK,
  moves: [],
};
export const BLACK_KING = {
  name: "Black King",
  color: "BLACK",
  presentation: "k",
  image: bK,
  moves: [],
};

const pieces = [
  BLACK_PAWN,
  WHITE_PAWN,
  WHITE_KNIGHT,
  BLACK_KNIGHT,
  WHITE_ROOK,
  BLACK_ROOK,
  WHITE_BISHOP,
  BLACK_BISHOP,
  WHITE_QUEEN,
  BLACK_QUEEN,
  WHITE_KING,
  BLACK_KING,
];

export const getPieceByPresentation = (
  presentation: string
): PieceType | undefined =>
  pieces.find((piece) => piece.presentation === presentation);

export const isSameColor = (piece1: string, piece2: string) => {
  if (!piece1 || piece1 === "0") return false;
  if (!piece2 || piece2 === "0") return false;
  if (piece1.toUpperCase() === piece1 && piece2.toUpperCase() === piece2)
    return true;
  if (piece1.toLowerCase() === piece1 && piece2.toLowerCase() === piece2)
    return true;

  return false;
};

interface PositionCoordinates {
  positionX: number;
  positionY: number;
}

export const isPositionsEqual = (
  posA: PositionCoordinates,
  posB: PositionCoordinates
) => posA.positionX === posB.positionX && posA.positionY === posB.positionY;
