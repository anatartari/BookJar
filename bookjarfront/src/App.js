import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "../src/components/navbar";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#101418",
    },
  },
});

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <NavBar />
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
