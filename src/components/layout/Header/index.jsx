import { AppBar, Box, Container, Toolbar, Typography, Divider } from '@mui/material';
import Navigation from '../../Navigation';


const Header = () => {
  return (
    <>
      {/* Announcement Bar */}
      <Box sx={{ bgcolor: "black", color: 'white', py: 1 }}>
        <Container>
          <Typography variant="body2" align="center">
            Miễn phí vận chuyển cho đơn hàng trên 500K
          </Typography>
        </Container>
      </Box>

      <AppBar position="static" sx={{ bgcolor: 'white', color: 'black', boxShadow: 'none' }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ py: 2, gap: 2 }}>
            {/* Logo */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              LOGO
            </Typography>
          </Toolbar>
          <Divider />
          <Navigation />
        </Container>
      </AppBar>
    </>
  );
};

export default Header; 