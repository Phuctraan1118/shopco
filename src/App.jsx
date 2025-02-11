import { useState } from "react";
import SigninPage from "./pages/SigninPage";
import MainScreen from "./pages/MainScreen";
import { Box, CssBaseline } from "@mui/material";



export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return isAuthenticated ? (
    <MainScreen />
  ) : (
    <Box sx={{ width: "100vw", overflowX: "hidden" }}>
    <CssBaseline />
     <SigninPage onSignIn={() => setIsAuthenticated(true)} />
    </Box>

   
  );
}
