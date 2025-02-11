import { Grid, Typography } from "@mui/material";

export default function Categories() {
    return (
      <Grid container spacing={2} justifyContent="center" sx={{ py: 3, bgcolor: "black", color: "white", textAlign: "center" }}>
        <CategoryItem title="Voucher" />
        <CategoryItem title="Giao hàng" />
        <CategoryItem title="So sánh sản phẩm" />
        <CategoryItem title="Chăm sóc khách hàng" />
      </Grid>
    );
  }
  
const CategoryItem =({ title }) => {
    return (
      <Grid item xs={6} sm={3}>
        <Typography>{title}</Typography>
      </Grid>
    );
  }