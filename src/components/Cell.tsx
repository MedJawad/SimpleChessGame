import React from "react";
import { Paper } from "@material-ui/core";
import Piece from "./Piece";
import { PieceType } from "./PiecesService";

interface CellProps {
  positionX: number;
  positionY: number;
  piece: PieceType | undefined;
  cellClickHandle: any;
  isSelected: boolean;
}

const Cell = ({
  positionX,
  positionY,
  isSelected,
  piece,
  cellClickHandle,
}: CellProps) => {
  return (
    <Paper
      style={{
        padding: 10,
        cursor: "pointer",
        height: "80px",
        width: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:
          (positionX + positionY) % 2 === 0 ? "burlywood" : "beige",
      }}
      onClick={() => cellClickHandle(positionX, positionY, piece)}
    >
      {piece && (
        <Piece img={piece.image} name={piece.name} isSelected={isSelected} />
      )}
    </Paper>
  );
};

export default Cell;
