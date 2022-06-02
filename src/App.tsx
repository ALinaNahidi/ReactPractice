import React from "react";
import "./App.css";
import BookCard from "./components/Organisms";
import {ThemeProvider } from "@mui/material";
import baseTheme from "./themes";

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <div className="App">
        <BookCard />
      </div>
    </ThemeProvider>
  );
}

export default App;
