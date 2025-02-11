import { Container, Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import img1 from '../assets/img/new1.png'; 
import img2 from '../assets/img/new2.png'; 
import img3 from '../assets/img/new3.png'; 
import img4 from '../assets/img/new4.png'; 
const products = [
    { id: 1, name: "Kem Nền Căng Bóng Mỏng", image: img1, price: 120, rating: 4.5 },
    { id: 2, name: "Serum Top White Perfect D6", image: img2, price: 240, oldPrice: 260, rating: 3.5, discount: 20 },
    { id: 3, name: "Top White Perfect D6", image: img3, price: 180, rating: 4.5 },
    { id: 4, name: "NOREVA SENSIDIANE SOOTHING SERUM", image: img4, price: 130, oldPrice: 160, rating: 3.5, discount: 30 },
  ];
export default function  NewArrivals()  {
    return (
      <Container sx={{ py: 5, maxWidth: "100%" }}>
        <Typography variant="h2" fontWeight="bold" style={{color:"black", fontFamily:"inherit"}} textAlign="center">NEW ARRIVALS</Typography>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }