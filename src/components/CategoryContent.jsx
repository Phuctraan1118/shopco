import { Box, Grid, Typography, Checkbox, FormControlLabel, Paper, Accordion, AccordionSummary, AccordionDetails, Divider } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ProductCard from "./ProductCard"; // Giả sử bạn đã có component này
import { Search as SearchIcon } from '@mui/icons-material';
import { InputBase, IconButton } from '@mui/material';
import { products } from '../data/products';

export default function CategoryContent() {
  return (
    <Box sx={{ px: 4, py: 3 }}>
      <Grid container spacing={3}>
        {/* Sidebar bên trái */}
        <Grid item xs={12} md={3}>
          <Paper elevation={0} sx={{ 
            p: 2, 
            border: '1px solid #eee',
            borderRadius: 2
          }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              Sữa rửa mặt
            </Typography>

            {/* Thay thế Typography bằng ô Search */}
            <Paper
              elevation={0}
              sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #eee',
                borderRadius: 2,
                mb: 3,
                '&:hover': {
                  border: '1px solid',
                  borderColor: 'primary.main',
                },
                '&:focus-within': {
                  border: '1px solid',
                  borderColor: 'primary.main',
                }
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Bạn đang tìm kiếm..."
                inputProps={{ 'aria-label': 'tìm kiếm sản phẩm' }}
              />
              <IconButton 
                type="button" 
                sx={{ 
                  p: '10px',
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'primary.lighter'
                  }
                }} 
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </Paper>

            {/* Danh mục chính */}
            <Box sx={{ mb: 2 }}>
              {['Mặt Nạ', 'Kem Chống Nắng', 'Dược Phẩm', 'Cao Rău'].map((item) => (
                <Box
                  key={item}
                  sx={{
                    py: 1.5,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    '&:hover': {
                      color: 'primary.main',
                    }
                  }}
                >
                  <Typography>{item}</Typography>
                  <ExpandMoreIcon sx={{ fontSize: 20 }} />
                </Box>
              ))}
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* Loại Da */}
            <Accordion 
              defaultExpanded 
              elevation={0} 
              sx={{ 
                '&:before': { display: 'none' },
                backgroundColor: 'transparent'
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ px: 0 }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600 }}>Loại Da</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 0 }}>
                {['Da Dầu', 'Da Khô', 'Da Nhờn'].map((type) => (
                  <FormControlLabel
                    key={type}
                    control={
                      <Checkbox 
                        sx={{ 
                          '&.Mui-checked': {
                            color: 'primary.main',
                          }
                        }}
                      />
                    }
                    label={type}
                    sx={{ 
                      display: 'block',
                      mb: 1,
                      '& .MuiTypography-root': {
                        fontSize: '0.9rem'
                      }
                    }}
                  />
                ))}
              </AccordionDetails>
            </Accordion>

            {/* Khoảng Giá */}
            <Accordion 
              defaultExpanded 
              elevation={0}
              sx={{ 
                '&:before': { display: 'none' },
                backgroundColor: 'transparent'
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ px: 0 }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600 }}>Khoảng Giá</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 0 }}>
                {[
                  { label: '0-300.000đ', color: '#FFE5BA' },
                  { label: '300.000-800.000đ', color: '#D4E9C7' },
                  { label: 'Trên 800.000đ', color: '#FFCCCB' }
                ].map((price) => (
                  <Box
                    key={price.label}
                    sx={{
                      mb: 1,
                      p: 1,
                      borderRadius: 1,
                      backgroundColor: price.color,
                      cursor: 'pointer',
                      '&:hover': {
                        opacity: 0.8
                      }
                    }}
                  >
                    <Typography variant="body2">{price.label}</Typography>
                  </Box>
                ))}
              </AccordionDetails>
            </Accordion>

            {/* Thương Hiệu */}
            <Accordion 
              defaultExpanded 
              elevation={0}
              sx={{ 
                '&:before': { display: 'none' },
                backgroundColor: 'transparent'
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ px: 0 }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600 }}>Thương Hiệu</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 0 }}>
                {['DJI', 'Holy Stone', 'Potensic', 'Ruko', 'aovo', 'OXOXO'].map((brand) => (
                  <FormControlLabel
                    key={brand}
                    control={
                      <Checkbox 
                        sx={{ 
                          '&.Mui-checked': {
                            color: 'primary.main',
                          }
                        }}
                      />
                    }
                    label={brand}
                    sx={{ 
                      display: 'block',
                      mb: 1,
                      '& .MuiTypography-root': {
                        fontSize: '0.9rem'
                      }
                    }}
                  />
                ))}
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>

        {/* Phần hiển thị sản phẩm bên phải */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <ProductCard 
                  product={{
                    ...product,
                    image: product.images[0] // ProductCard chỉ cần 1 ảnh
                  }} 
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
} 