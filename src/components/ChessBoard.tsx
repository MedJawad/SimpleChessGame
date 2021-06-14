import React, { CSSProperties, useState } from "react";
import { Grid } from "@material-ui/core";
import Cell from "./Cell";
import { getPieceByPresentation, isSameColor } from "./PiecesService";

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

  const [selectedPiece, setselectedPiece] = useState({
    positionX: -1,
    positionY: -1,
  });

  const selectPiece = (positionX: number, positionY: number) => {
    const originalPiece =
      selectedPiece.positionX !== -1 && selectedPiece.positionY !== -1
        ? boardState[selectedPiece.positionX][selectedPiece.positionY]
        : "";
    const target = boardState[positionX][positionY];
    if (
      positionX === selectedPiece.positionX &&
      positionY === selectedPiece.positionY
    ) {
      setselectedPiece({
        positionX: -1,
        positionY: -1,
      });
    } else if (!isSameColor(target, originalPiece)) {
      setselectedPiece({ positionX, positionY });
      emptyCellClickHandle(positionX, positionY);
    } else {
      setselectedPiece({ positionX, positionY });
    }
  };

  const emptyCellClickHandle = (positionX: number, positionY: number) => {
    if (selectedPiece.positionX !== -1 && selectedPiece.positionY !== -1) {
      const newBoardState = boardState.map((row) => row.map((cell) => cell));
      const movingPiece =
        newBoardState[selectedPiece.positionX][selectedPiece.positionY];
      const target = newBoardState[positionX][positionY];

      if (isSameColor(target, movingPiece)) return;

      newBoardState[selectedPiece.positionX][selectedPiece.positionY] = "0";
      newBoardState[positionX][positionY] = movingPiece;

      setboardState(newBoardState);
      setselectedPiece({ positionX: -1, positionY: -1 });
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
            select={selectPiece}
            piece={getPieceByPresentation(piecePresentation)}
            cellClickHandle={emptyCellClickHandle}
          />
        ))}
      </div>
    );
  };
  return (
    <div>
      <Grid container spacing={1}>
        <Grid container justify="center" spacing={1}>
          {boardState.map((value, index) => (
            <div key={index}>{renderRow(value, index)}</div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

const flexRowCenterCss: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};

export default ChessBoard;
