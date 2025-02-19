import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SigninPage from "./pages/SigninPage";
import MainScreen from "./pages/MainScreen";
import CategoryScreen from "./pages/CategoryScreen";
import { Box, CssBaseline } from "@mui/material";
import ProductScreen from "./pages/Product/ProductScreen";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          isAuthenticated ? (
            <MainScreen />
          ) : (
            <Box sx={{ width: "100vw", overflowX: "hidden" }}>
              <CssBaseline />
              <SigninPage onSignIn={() => setIsAuthenticated(true)} />
            </Box>
          )
        } />
        {/* <Route path="/category" element={<CategoryScreen />} /> */}
        <Route path="/category" element={<CategoryScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
