import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const ProductCard =({ product }) =>{
    return (
      <Card sx={{ height: "100%"  }} style={{borderRadius:20}}>
        <CardMedia component="img" height="250" style={{borderRadius:20}} image={product.image} alt={product.name} />
        <CardContent>
          <Typography variant="h6" fontWeight="bold">{product.name}</Typography>
          <Typography color="textSecondary">⭐ {product.rating}</Typography>
          <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>${product.price}</Typography>
          {product.oldPrice && <Typography sx={{ textDecoration: "line-through", color: "red" }}>${product.oldPrice}</Typography>}
          {product.discount && <Typography sx={{ bgcolor: "red", color: "white", px: 1, display: "inline-block", borderRadius: 1 }}>-{product.discount}%</Typography>}
        </CardContent>
      </Card>
    );
  }
  
  export default ProductCard;
  