import { Box } from '@mui/material';
import Header from '../Header';
import Footer from '../Footer';

const MainLayout = ({ children }) => {
  return (
    <Box>
      <Header />
      <Box component="main" sx={{ minHeight: '100vh' }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout; 