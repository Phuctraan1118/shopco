import { AccountCircle, ShoppingCart, Search, Menu } from "@mui/icons-material";
import { AppBar, IconButton, InputBase, Toolbar, Typography, Box, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useState } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <List>
        {['Shop', 'On Sale', 'New Arrivals', 'Brands'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ bgcolor: "white", color: "black", boxShadow: "none", borderBottom: "1px solid #ddd" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton onClick={handleDrawerToggle}>
            <Menu />
          </IconButton>
        </Box>
        
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>SHOP.CO</Typography>
        
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          <Typography variant="body1" sx={{ cursor: "pointer", "&:hover": { color: "#ff4081" } }}>Shop ▼</Typography>
          <Typography variant="body1" sx={{ cursor: "pointer", "&:hover": { color: "#ff4081" } }}>On Sale</Typography>
          <Typography variant="body1" sx={{ cursor: "pointer", "&:hover": { color: "#ff4081" } }}>New Arrivals</Typography>
          <Typography variant="body1" sx={{ cursor: "pointer", "&:hover": { color: "#ff4081" } }}>Brands</Typography>
        </Box>
        
        <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", bgcolor: "#f2f2f2", borderRadius: 5, px: 2, py: 0.5, flexGrow: 0.4 }}>
          <Search sx={{ color: "gray", mr: 1 }} />
          <InputBase placeholder="Search for products..." sx={{ flex: 1 }} />
        </Box>
        
        <Box>
          <IconButton color="inherit" sx={{ "&:hover": { bgcolor: "#f2f2f2" } }}>
            <ShoppingCart />
          </IconButton>
          <IconButton color="inherit" sx={{ "&:hover": { bgcolor: "#f2f2f2" } }}>
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
      
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;