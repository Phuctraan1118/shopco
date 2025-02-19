import { AccountCircle, ShoppingCart, Search, Menu, Edit, Phone, KeyboardArrowDown } from "@mui/icons-material";
import {
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  Box,
  Badge,
  Avatar,
  Button,
  Container,
  Menu as MuiMenu,
  MenuItem,
  Paper,
  Popper,
  Grow,
  ClickAwayListener,
  MenuList,
  Divider,
  useTheme
} from "@mui/material";
import { useState } from "react";
import Navigation from './Navigation';

const menuItems = [
  { name: "Làm Sạch Da", subItems: ["Tẩy Trang Mặt", "Sữa Rửa Mặt", "Tẩy Tế Bào Chết Da Mặt", "Toner/ Nước Cân Bằng Da"] },
  { name: "Đặc Trị", subItems: ["Serum/Tinh Chất", "Hỗ Trợ Trị Mụn"] },
  { name: "Dưỡng Ẩm", subItems: ["Xịt Khoáng", "Lotion/Sữa Dưỡng", "Kem/Gel/Dầu Dưỡng"] },
  { name: "Bộ Chăm Sóc Da Mặt", subItems: [] },
  { name: "Chống Nắng Da Mặt", subItems: [] },
  { name: "Dưỡng Mắt", subItems: [] },
  { name: "Dưỡng Môi", subItems: [] },
  { name: "Mặt Nạ", subItems: [] },
  { name: "Vấn Đề Về Da", subItems: ["Da Dầu/Lỗ Chân Lông To", "Da Khô/Mất Nước", "Da Lão Hóa", "Da Mụn", "Thâm/Nám/Tàn Nhang"] },
  { name: "Dụng Cụ/Phụ Kiện Chăm Sóc Da", subItems: ["Bông Tẩy Trang", "Dụng Cụ/Máy Rửa Mặt", "Máy Xông Mặt/Đẩy Tinh Chất"] }
];

const extraMenuItems = ["Hot Deals", "Thương Hiệu", "Bán chạy", "Hàng mới về", "Blog", "Tra cứu đơn hàng"];

const Header = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setActiveCategory(null);
  };

  const handleCategoryHover = (category) => {
    setActiveCategory(category);
  };

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
          {/* Main Toolbar */}
          <Toolbar sx={{ py: 2, gap: 2 }}>
            {/* Logo */}
            <Box sx={{ flexShrink: 0 }}>
              <Avatar
                alt="LOGO"
                src="/images/logo.png"
                variant="square"
                sx={{ width: 90, height: 90,  borderRadius:100 }}
              />
            </Box>

            {/* Search Bar */}
            <Paper
              component="form"
              sx={{
                display: 'flex',
                alignItems: 'center',
                flex: 1,
                mx: 4,
                px: 2,
                py: 0.5,
                borderRadius: 2,
                bgcolor: '#f5f5f5'
              }}
            >
              <InputBase
                placeholder="Tìm kiếm sản phẩm..."
                sx={{ flex: 1, ml: 1 }}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <IconButton type="submit" sx={{ p: '10px' }}>
                <Search />
              </IconButton>
            </Paper>

            {/* Actions */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              {/* Quiz Button */}
              <Button
                startIcon={<Edit />}
                sx={{
                  color: 'text.primary',
                  '&:hover': { bgcolor: 'action.hover' }
                }}
              >
                Quiz
              </Button>

              {/* Support */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton color="inherit">
                  <Phone />
                </IconButton>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Hỗ trợ khách hàng
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    1800-1234
                  </Typography>
                </Box>
              </Box>

              {/* Cart */}
              <IconButton color="inherit">
                <Badge badgeContent={3} color="error">
                  <ShoppingCart />
                </Badge>
              </IconButton>

              {/* Account */}
              <Button
                startIcon={<AccountCircle />}
                sx={{ color: 'text.primary' }}
              >
                Tài khoản
              </Button>
            </Box>
          </Toolbar>

          <Divider />
          
          {/* Add Navigation component */}
          <Navigation />
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
