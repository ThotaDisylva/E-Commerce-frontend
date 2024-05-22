import React, { useEffect, useState } from "react";
import {
  IconButton,
  Button,
  Card,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  ShoppingCartOutlined as ShoppingCartOutlinedIcon,
  AccountCircle,
  Menu,
  MoreVert,
} from "@mui/icons-material";
import SearchBar from "./SearchBar/SearchBar";
import CategoryButton from "./CategoryButton/CategoryButton";
import SignIn from "./AuthPopup/SignIn";
import SignUp from "./AuthPopup/SignUp";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [cardOpen, setCardOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [subCategoryOpen, setSubCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isSignIn, setIsSignIn] = useState(true);
    const openPopup = () => {
      setIsSignIn(true); 
      setIsPopupOpen(true);
    };
  
    const closePopup = () => {
      setIsPopupOpen(false);
    };
  
    const toggleForm = () => {
      setIsSignIn(!isSignIn);
    };
  
  const dummySubcategories = {
    "Category 1": ["Subcategory 1.1", "Subcategory 1.2", "Subcategory 1.3"],
    "Category 2": ["Subcategory 2.1", "Subcategory 2.2"],
    "Category 3": ["Subcategory 3.1", "Subcategory 3.2", "Subcategory 3.3"],
  };

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSubCategoryOpen(true);
  };

  const handleSubCategoryClick = (subcategory) => {
    console.log("Subcategory clicked:", subcategory);
  };

  const categories = ["Category 1", "Category 2", "Category 3", "Category 2", "Category 3", "Category 2", "Category 3", "Category 2", "Category 3", "Category 2", "Category 3", "Category 2", "Category 3", "Category 2", "Category 3", "Category 2", "Category 3", "Category 2", "Category 3"];

  const handleMoreClick = () => {
      setCardOpen(!cardOpen)
    
  };

  const handleDocumentClick = (event) => {
    if (!event.target.closest('.menu-container')) {
      setCardOpen(false);
    }
  };
  
  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-[1000]">
      <div className="flex flex-row justify-between items-center h-[4.5rem] px-1 md:px-7">
      <Link to={"/"}>
        <div className="text-4xl font-bold hidden md:block">SHOPIT</div>
      </Link>
        
        <div className="md:hidden">
          <IconButton
            size="large"
            aria-label="menu"
            onClick={handleClick}
            sx={{ "&:hover": { backgroundColor: "white" } }}
          >
            <Menu fontSize="inherit" />
          </IconButton>
        </div>
        <div className="w-full md:w-2/5">
          <SearchBar />
        </div>
        <div className="hidden md:block">
          <CategoryButton />
        </div>
        <div className="lg:flex lg:flex-row lg:items-center lg:justify-end hidden">
        <Link to={"/cart"}>
          <IconButton size="large" aria-label="cart">
            <ShoppingCartOutlinedIcon fontSize="inherit" />
          </IconButton>
        </Link>
            <Button variant="contained" onClick={openPopup}>
              SIGN IN
            </Button>
          
        </div>
        <div className="block lg:hidden menu-container">
          <IconButton
            size="large"
            aria-label="show more"
            onClick={handleMoreClick}
            sx={{ "&:hover": { backgroundColor: "white" } }}
          >
            <MoreVert />
          </IconButton>
        </div>
      </div>
      {cardOpen && (
        <Card className="bg-white lg:hidden absolute top-[4.5rem] right-0 w-[10rem] py-2">
          <div className="flex items-center hover:bg-[#F1F2F4] cursor-pointer px-5">
          <Link to={"/cart"}>
            <div className="my-3">
              <ShoppingCartOutlinedIcon fontSize="medium" />
              <span className="ml-2">Cart</span>
            </div>
          </Link>
          </div>
          <div className="flex items-center hover:bg-[#F1F2F4] cursor-pointer px-5">
            <div className="my-3" onClick={openPopup}>
              <AccountCircle fontSize="medium" />
              <span className="ml-2">LOGIN</span>
            </div>
          </div>
        </Card>
      )}

      {/* Menu Drawer */}
      <Drawer
        anchor="left"
        open={menuOpen}
        onClose={handleClick}
        variant="temporary"
        sx={{ "& .MuiDrawer-paper": { width: "70vw" } }}
      >
        <List>
          {categories.map((category, index) => (
            <ListItem button key={index} onClick={() => handleCategoryClick(category)}>
              <ListItemText primary={category} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Subcategory Drawer */}
      <Drawer
        anchor="left"
        open={subCategoryOpen}
        onClose={() => setSubCategoryOpen(false)}
        variant="temporary"
        sx={{ "& .MuiDrawer-paper": { width: "70vw" } }}
      >
        <List>
          {dummySubcategories[selectedCategory] &&
            dummySubcategories[selectedCategory].map((subcategory, index) => (
              <ListItem
                button
                key={index}
                onClick={() => handleSubCategoryClick(subcategory)}
              >
                <ListItemText primary={subcategory} />
              </ListItem>
            ))}
        </List>
      </Drawer>

      {/* {isPopupOpen && (
        <Popup open={isPopupOpen} closeOnDocumentClick onClose={closePopup}>
          {isSignIn ? <SignIn toggleForm={toggleForm} /> : <SignUp toggleForm={toggleForm} />}
        </Popup>
      )} */}
      {isPopupOpen && (
          <Popup open={isPopupOpen} closeOnDocumentClick onClose={closePopup}>
            {isSignIn ? <SignIn toggleForm={toggleForm} /> : <SignUp toggleForm={toggleForm} />}
          </Popup>
        )}
      </div>
      
  );
};

export default NavBar;
