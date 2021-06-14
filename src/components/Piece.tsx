import React from "react";

interface PieceProps {
  img: string;
  name: string;
  isSelected: boolean;
  select: any;
}

const Piece = ({ img, name, isSelected, select }: PieceProps) => {
  return (
    <div
      style={{
        cursor: "pointer",
        backgroundColor: isSelected ? "yellowgreen" : "transparent",
      }}
      onClick={select}
    >
      <img
        style={{ maxHeight: "60px", maxWidth: "60px" }}
        src={img}
        alt={name}
      />
    </div>
  );
};

export default Piece;
