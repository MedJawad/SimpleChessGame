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
  presentation: string;
  image: string;
  moves: string[];
}

export const WHITE_PAWN = {
  name: "White Pawn",
  presentation: "P",
  image: wP,
  moves: [],
};

export const BLACK_PAWN = {
  name: "Black Pawn",
  presentation: "p",
  image: bP,
  moves: [],
};
export const WHITE_KNIGHT = {
  name: "White Knight",
  presentation: "N",
  image: wN,
  moves: [],
};
export const BLACK_KNIGHT = {
  name: "Black Knight",
  presentation: "n",
  image: bN,
  moves: [],
};
export const WHITE_ROOK = {
  name: "White Rook",
  presentation: "R",
  image: wR,
  moves: [],
};
export const BLACK_ROOK = {
  name: "Black Rook",
  presentation: "r",
  image: bR,
  moves: [],
};
export const WHITE_BISHOP = {
  name: "White Bishop",
  presentation: "B",
  image: wB,
  moves: [],
};
export const BLACK_BISHOP = {
  name: "Black Bishop",
  presentation: "b",
  image: bB,
  moves: [],
};
export const WHITE_QUEEN = {
  name: "White Queen",
  presentation: "Q",
  image: wQ,
  moves: [],
};
export const BLACK_QUEEN = {
  name: "Black Queen",
  presentation: "q",
  image: bQ,
  moves: [],
};
export const WHITE_KING = {
  name: "White King",
  presentation: "K",
  image: wK,
  moves: [],
};
export const BLACK_KING = {
  name: "Black King",
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
