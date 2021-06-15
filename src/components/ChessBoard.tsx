import React, { CSSProperties, useState } from "react";
import { Grid } from "@material-ui/core";
import Cell from "./Cell";
import {
  getPieceByPresentation,
  isPositionsEqual,
  isSameColor,
  PieceType,
} from "./PiecesService";

const ChessBoard = () => {
  const [boardState, setboardState] = useState(
    // "rnbqkbnr/pppppppp/00000000/00000000/00000000/00000000/PPPPPPPP/RNBQKBNR"
    [
      ["r", "n", "b", "q", "k", "b", "n", "r"],
      ["p", "p", "p", "p", "p", "p", "p", "p"],
      ["0", "0", "0", "0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0", "0", "0", "0"],
      ["P", "P", "P", "P", "P", "P", "P", "P"],
      ["R", "N", "B", "Q", "K", "B", "N", "R"],
    ]
  );

  const [turn, setturn] = useState(1);

  const [selectedPiece, setselectedPiece] = useState({
    positionX: -1,
    positionY: -1,
  });

  const cellClickHandle = (
    positionX: number,
    positionY: number,
    occupyingPiece: PieceType | null
  ) => {
    const isAPieceSelected = !isPositionsEqual(selectedPiece, {
      positionX: -1,
      positionY: -1,
    });
    if (isAPieceSelected) {
      const originallySelected =
        boardState[selectedPiece.positionX][selectedPiece.positionY];
      if (
        occupyingPiece &&
        isPositionsEqual(selectedPiece, { positionX, positionY })
      ) {
        setselectedPiece({ positionX: -1, positionY: -1 });
        return;
      }
      if (
        occupyingPiece &&
        isSameColor(occupyingPiece.presentation, originallySelected)
      ) {
        setselectedPiece({ positionX, positionY });
        return;
      }
      //Empty or opposite color, check for legit moves etc
      const moveDiff =
        selectedPiece.positionY -
        positionY +
        (selectedPiece.positionX - positionX) * 8;
      console.log(moveDiff);
      if (!getPieceByPresentation(originallySelected)?.moves.includes(moveDiff))
        return;
      const newBoardState = boardState.map((row) => row.map((cell) => cell));
      newBoardState[selectedPiece.positionX][selectedPiece.positionY] = "0";
      newBoardState[positionX][positionY] = originallySelected;
      setboardState(newBoardState);
      setselectedPiece({ positionX: -1, positionY: -1 });
      setturn(turn + 1);
    } else if (occupyingPiece) {
      // check if it's the turn for the piece to be selected
      const isLegitimateTurnForColor =
        occupyingPiece.color === "WHITE" ? turn % 2 === 1 : turn % 2 === 0;
      if (isLegitimateTurnForColor) {
        setselectedPiece({ positionX, positionY });
      }
    }
  };

  const renderRow = (row: string[], rowNumber: number) => {
    return (
      <div style={flexRowCenterCss}>
        {row.map((piecePresentation, index) => (
          <Cell
            key={index}
            positionX={rowNumber}
            positionY={index}
            isSelected={
              selectedPiece.positionX === rowNumber &&
              selectedPiece.positionY === index
            }
            piece={getPieceByPresentation(piecePresentation)}
            cellClickHandle={cellClickHandle}
          />
        ))}
      </div>
    );
  };
  return (
    <div>
      <h2>Black {turn % 2 === 0 && "✨"}</h2>
      <Grid container spacing={1}>
        <Grid container justify="center" spacing={1}>
          {boardState.map((value, index) => (
            <div key={index}>{renderRow(value, index)}</div>
          ))}
        </Grid>
      </Grid>
      <h2>White {turn % 2 === 1 && "✨"}</h2>
    </div>
  );
};

const flexRowCenterCss: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};

export default ChessBoard;
