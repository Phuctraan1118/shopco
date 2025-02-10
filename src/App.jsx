
import Header from "./components/Header";
import { NewArrivals } from "./components/NewArrivals";
import { Categories } from "./components/Categories";
import Banner from "./components/Banner";
import { Box, Divider } from "@mui/material";
import { TopSelling } from "./components/TopSelling";
import { BrowseBySkin } from "./components/BrowserBySkin";
import Footer from "./components/Footer/Footer";

const products = [
  { id: 1, name: "Kem Nền Căng Bóng Mỏng", image: "/foundation.jpg", price: 120, rating: 4.5 },
  { id: 2, name: "Serum Top White Perfect D6", image: "/serum.jpg", price: 240, oldPrice: 260, rating: 3.5, discount: 20 },
  { id: 3, name: "Top White Perfect D6", image: "/top-white.jpg", price: 180, rating: 4.5 },
  { id: 4, name: "NOREVA SENSIDIANE SOOTHING SERUM", image: "/noreva.jpg", price: 130, oldPrice: 160, rating: 3.5, discount: 30 },
];

export default function App() {
  return (
    <Box sx={{ width: "100vw", overflowX: "hidden" }}>
      <Header />
      <Banner />
      <Categories />
      <NewArrivals products={products} />
      <Divider style={{marginLeft: 100, marginRight:100, marginTop:25, marginBottom:25}}/>
      <TopSelling products={products} />
      <Divider style={{marginLeft: 100, marginRight:100, marginTop:25, marginBottom:25}}/>
      <BrowseBySkin/>
      <Footer/>
    </Box>
  );
}







