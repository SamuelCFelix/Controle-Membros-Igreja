import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Componentes
import ErrorBoundary from "./components/ErrorBoundary";

// Páginas
import Home from "./pages/home";

import "./main.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#006effff",
      contrastText: "#fff",
    },
    secondary: {
      main: "#e9e9e9ff",
      contrastText: "#fff",
    },
    background: {
      default: "#fdfdfd",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </ErrorBoundary>
      </Router>
    </ThemeProvider>
  );
}

export default App;
