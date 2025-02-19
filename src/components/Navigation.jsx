import { Box, Button, Container, MenuItem, MenuList, Paper, Popper, Grow, ClickAwayListener } from "@mui/material";
import { Menu as MenuIcon, KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { name: "Làm Sạch Da", subItems: ["Tẩy Trang Mặt", "Sữa Rửa Mặt", "Tẩy Tế Bào Chết Da Mặt", "Toner/ Nước Cân Bằng Da"] },
  { name: "Đặc Trị", subItems: ["Serum/Tinh Chất", "Hỗ Trợ Trị Mụn"] },
  { name: "Dưỡng Ẩm", subItems: ["Xịt Khoáng", "Lotion/Sữa Dưỡng", "Kem/Gel/Dầu Dưỡng"] },
  { name: "Bộ Chăm Sóc Da Mặt", subItems: [] },
  { name: "Chống Nắng Da Mặt", subItems: [] },
  { name: "Dưỡng Mắt", subItems: [] },
  { name: "Dưỡng Môi", subItems: [] },
  { name: "Mặt Nạ", subItems: [] }
];

const extraMenuItems = ["Hot Deals", "Thương Hiệu", "Bán chạy", "Hàng mới về", "Blog", "Tra cứu đơn hàng"];

const Navigation = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setActiveCategory(null);
    setSubMenuAnchorEl(null);
  };

  const handleCategoryHover = (event, category) => {
    if (category.subItems.length > 0) {
      setActiveCategory(category);
      setSubMenuAnchorEl(event.currentTarget);
    } else {
      setActiveCategory(null);
      setSubMenuAnchorEl(null);
    }
  };

  const handleCategoryClick = (category, subItem) => {
    handleMenuClose();
    const path = subItem 
      ? `/category/${category.name.toLowerCase()}/${subItem.toLowerCase()}`
      : `/category/${category.name.toLowerCase()}`;
    navigate("/category");
  };

  return (
    <Box sx={{ 
      py: 1,
      borderBottom: '1px solid',
      borderColor: 'grey.200',
      backgroundColor: 'white',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {/* Categories Menu */}
          <Button
            startIcon={<MenuIcon />}
            endIcon={<KeyboardArrowDown />}
            onClick={handleMenuOpen}
            sx={{
              bgcolor: "black",
              color: 'white',
              '&:hover': {
                bgcolor: "#ffbb02",
              },
              px: 2,
              py: 1,
              minWidth: 180
            }}
          >
            Danh Mục Sản Phẩm
          </Button>

          <Popper
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            placement="bottom-start"
            transition
            disablePortal
            sx={{ zIndex: 1200 }}
          >
            {({ TransitionProps }) => (
              <Grow {...TransitionProps}>
                <Paper 
                  sx={{ 
                    mt: 1, 
                    width: 250,
                    boxShadow: 3
                  }}
                >
                  <ClickAwayListener onClickAway={handleMenuClose}>
                    <MenuList>
                      {menuItems.map((category) => (
                        <MenuItem
                          key={category.name}
                          onMouseEnter={(e) => handleCategoryHover(e, category)}
                          onClick={() => handleCategoryClick(category)}
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            py: 1.5,
                            '&:hover': {
                              bgcolor: 'primary.lighter',
                              color: "#ffbb02"
                            }
                          }}
                        >
                          {category.name}
                          {category.subItems.length > 0 && <KeyboardArrowRight />}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>

          {/* Submenu */}
          <Popper
            open={Boolean(subMenuAnchorEl) && activeCategory?.subItems.length > 0}
            anchorEl={subMenuAnchorEl}
            placement="right-start"
            transition
            sx={{ zIndex: 1200 }}
          >
            {({ TransitionProps }) => (
              <Grow {...TransitionProps}>
                <Paper 
                  sx={{ 
                    ml: 1, 
                    width: 220,
                    boxShadow: 3
                  }}
                >
                  <MenuList>
                    {activeCategory?.subItems.map((subItem) => (
                      <MenuItem
                        key={subItem}
                        onClick={() => handleCategoryClick(activeCategory, subItem)}
                        sx={{
                          py: 1.5,
                          '&:hover': {
                            bgcolor: 'primary.lighter',
                            color: 'primary.main'
                          }
                        }}
                      >
                        {subItem}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Paper>
              </Grow>
            )}
          </Popper>

          {/* Extra Menu Items */}
          {extraMenuItems.map((item) => (
            <Button
              key={item}
              sx={{
                color: 'text.primary',
                position: 'relative',
                '&:hover': {
                  color: "#ffbb02",
                  '&::after': {
                    width: '100%'
                  }
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: 0,
                  height: '2px',
                  backgroundColor: "#ffbb02",
                  transition: 'width 0.3s ease'
                }
              }}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Navigation; 