import { Box, Container, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Về chúng tôi
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Chúng tôi là đơn vị cung cấp các sản phẩm chăm sóc da uy tín, 
              chất lượng với giá cả hợp lý nhất.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Liên hệ
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: contact@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +84 123 456 789
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Theo dõi chúng tôi
            </Typography>
            <Link href="#" color="inherit">
              Facebook
            </Link>
            <br />
            <Link href="#" color="inherit">
              Instagram
            </Link>
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 4 }}>
          © 2024 Your Company. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;