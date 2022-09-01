import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import NoPage from "./page/NoPage";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    secondary: {
      main: '#ed1e1c',
    },
  },
  typography: {
    h5alt: {
      color: '#bbb',
      textDecoration: 'underline',
    }
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <HashRouter>
        <Routes>
          <Route index element={ <Navigate to="home" /> } />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </HashRouter>
    </ThemeProvider >
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);