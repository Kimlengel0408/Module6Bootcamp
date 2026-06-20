import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { tealTheme, yellowTheme } from "./themes/tealTheme";
import ThemeButton from "./components/ThemeButton";
import BasicGrid from "./components/BasicGrid";
import MUIDialog from "./components/MUIDialog";

function App() {
  const [themeName, setThemeName] = useState("teal");

  const selectedTheme = themeName === "teal" ? tealTheme : yellowTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />

      <ThemeButton themeName={themeName} setThemeName={setThemeName} />

      <MUIDialog text="My first MUI dialog" />
      <BasicGrid />
    </ThemeProvider>
  );
}

export default App;