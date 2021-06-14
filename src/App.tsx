import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container } from "@material-ui/core";
import ChessBoard from "./components/ChessBoard";

function App() {
  return (
    <div className="App" style={{ padding: 160 }}>
      <Container>
        <ChessBoard />
      </Container>
    </div>
  );
}

export default App;
