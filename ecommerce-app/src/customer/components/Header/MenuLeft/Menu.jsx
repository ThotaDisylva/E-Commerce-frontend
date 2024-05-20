import React, { useState } from "react";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { Menu as MenuIcon, ChevronRight } from "@mui/icons-material";

const Menu = ({ categories, subcategories }) => {
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
  const [rightDrawerOpen, setRightDrawerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleLeftDrawer = () => {
    setLeftDrawerOpen(!leftDrawerOpen);
  };

  const toggleRightDrawer = () => {
    setRightDrawerOpen(!rightDrawerOpen);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    toggleRightDrawer();
  };

  return (
    <>
      {/* Left Drawer */}
      <Drawer
        anchor="left"
        open={leftDrawerOpen}
        onClose={toggleLeftDrawer}
      >
        <List>
          {categories.map((category, index) => (
            <ListItem button key={index} onClick={() => handleCategoryClick(category)}>
              <ListItemText primary={category} />
              <ListItemIcon>
                <ChevronRight />
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Right Drawer */}
      <Drawer
        anchor="right"
        open={rightDrawerOpen}
        onClose={toggleRightDrawer}
      >
        <List>
          {selectedCategory && subcategories[selectedCategory].map((subcategory, index) => (
            <ListItem button key={index}>
              <ListItemText primary={subcategory} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Menu Icon */}
      <IconButton
        size="large"
        aria-label="menu"
        onClick={toggleLeftDrawer}
        sx={{ position: "absolute", top: 0, left: 0 }}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default Menu;
