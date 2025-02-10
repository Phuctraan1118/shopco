import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Link, 
  Stack, 
  TextField, 
  Button, 
  Grid 
} from '@mui/material';
import { 
  Twitter, 
  Facebook, 
  Instagram, 
  GitHub 
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: 'background.default', 
        py: 4 
      }}
    >
      <Container maxWidth="xl">
        <Box 
          sx={{ 
            backgroundColor: 'black', 
            color: 'white', 
            p: 3, 
            mb: 4,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            textAlign: 'center',
            width: '100%'
          }}
        >
          <Typography 
            variant="h6" 
            sx={{ mb: { xs: 2, md: 0 } }}
          >
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </Typography>
          <Stack 
            direction={{ xs: 'column', md: 'row' }} 
            spacing={2} 
            sx={{ width: { xs: '100%', md: 'auto' }, alignItems: 'center' }}
          >
            <TextField 
              variant="outlined"
              placeholder="Enter your email address"
              fullWidth
              sx={{ 
                backgroundColor: 'white',
                '& .MuiOutlinedInput-root': { borderRadius: 0 },
                mb: { xs: 2, md: 0 }
              }}
            />
            <Button 
              variant="contained" 
              sx={{ 
                backgroundColor: 'white', 
                color: 'black',
                borderRadius: 0,
                '&:hover': { backgroundColor: 'grey.300' },
                width: { xs: '100%', md: 'auto' }
              }}
            >
              Subscribe
            </Button>
          </Stack>
        </Box>

        <Grid 
          container 
          spacing={3}
          sx={{ 
            textAlign: { xs: 'center', sm: 'left' },
            justifyContent: 'center'
          }}
        >
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              SHOP.CO
            </Typography>
            <Stack 
              direction="row" 
              spacing={2} 
              sx={{ justifyContent: { xs: 'center', sm: 'flex-start' } }}
            >
              <Link href="#" color="inherit"><Twitter /></Link>
              <Link href="#" color="inherit"><Facebook /></Link>
              <Link href="#" color="inherit"><Instagram /></Link>
              <Link href="#" color="inherit"><GitHub /></Link>
            </Stack>
          </Grid>

          {[
            { title: 'COMPANY', items: ['About', 'Features', 'Works', 'Career'] },
            { title: 'HELP', items: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'] },
            { title: 'FAQ', items: ['Account', 'Manage Deliveries', 'Orders', 'Payments'] },
          ].map((section) => (
            <Grid key={section.title} item xs={6} sm={2}>
              <Typography 
                variant="subtitle1" 
                fontWeight="bold" 
                gutterBottom 
              >
                {section.title}
              </Typography>
              <Stack spacing={1}>
                {section.items.map((item) => (
                  <Link href="#" color="inherit" key={item}>
                    {item}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Box 
          sx={{ 
            mt: 4, 
            display: 'flex', 
            flexWrap: 'wrap',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          <Typography variant="body2" sx={{ mb: 2 }}>
            Accepted Payment Methods
          </Typography>
          <Box 
            sx={{ 
              display: 'flex', 
              gap: 2, 
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            <img src="https://dwglogo.com/wp-content/uploads/2016/08/Visa-logo-02.png" alt="Visa" width="50" height="50" />
            <img src="https://www.pixartprinting.fr/blog/wp-content/uploads/2019/07/mastercard.png" alt="Mastercard" height="30" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnTGicJyEh9OPJjiD_Uy05yXm_HxtxPNavpA&sg" alt="PayPal" height="30" />
            <img src="https://download.logo.wine/logo/Apple_Pay/Apple_Pay-Logo.wine.png" alt="Apple Pay" height="30" />
            <img src="https://e7.pngegg.com/pngimages/582/783/png-clipart-google-pay-g-pay-logo-tech-companies.png" alt="Google Pay" height="30" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
