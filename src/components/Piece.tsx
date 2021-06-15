import React from "react";

interface PieceProps {
  img: string;
  name: string;
  isSelected: boolean;
}

const Piece = ({ img, name, isSelected }: PieceProps) => {
  return (
    <div
      style={{
        backgroundColor: isSelected ? "yellowgreen" : "transparent",
      }}
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
