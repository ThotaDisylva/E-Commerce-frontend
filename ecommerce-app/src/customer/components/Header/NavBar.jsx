import React, { useEffect, useState } from "react";
import {
  IconButton,
  Button,
  Card,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Badge,
} from "@mui/material";
import {
  ShoppingCartOutlined as ShoppingCartOutlinedIcon,
  AccountCircle,
  Menu,
  MoreVert,
} from "@mui/icons-material";
import HomeIcon from '@mui/icons-material/Home';
import SearchBar from "./SearchBar/SearchBar";
import CategoryButton from "./CategoryButton/CategoryButton";
import SignIn from "./AuthPopup/SignIn";
import SignUp from "./AuthPopup/SignUp";
import Popup from "reactjs-popup";
import { Link, useNavigate } from "react-router-dom";
import { useUserInfoContext } from "../../../context/UserInfoContext";
import useHomePageInfo from "../../../hooks/useHomePageInfo";
import toast from "react-hot-toast";
import PasswordReset from "./AuthPopup/PasswordReset";
import OtpEntry from "./AuthPopup/otpEntry";
import SendOtp from "./AuthPopup/SendOtp";
import useForgotPasswordHandler from "../../../hooks/useForgotPasswordHandler";

const NavBar = ({ cartItemCount , categoriesDetails, filters, setFilters}) => {
const [cardOpen, setCardOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [subCategoryOpen, setSubCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isOtpEntry, setIsOtpEntry] = useState(false);
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const [email, setEmail] = useState("");

  const { role } = useUserInfoContext();
  const { loadHomePageInfo } = useHomePageInfo();
  const {sendOtp, verifyOtp, resetPassword,loading, passwordChanged} = useForgotPasswordHandler();

  const navigate = useNavigate();
  

  useEffect(() => {
    if (role) {
      loadHomePageInfo();
      closePopup();
    }
  }, [role]);

  
  const openPopup = () => {
    setIsPopupOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const toggleSignupSigninForm = () => {
    setIsSignIn(!isSignIn);
    setIsSignUp(!isSignUp);
  };
  
  const handleForgotPassword = (email) => {
    setEmail(email);
    setIsSignIn(false);
    setIsForgotPassword(true);
  };

  const handleSendOtp = (email) => {
    if(email !== ""){
      setEmail(email)
      sendOtp(email,false, setIsForgotPassword, setIsOtpEntry);
    }else{
      toast.error("Email not entered")
    }
  };

  const handleResendOTP = () => { 
    sendOtp(email,true, setIsForgotPassword, setIsOtpEntry);
  };

  const handleOtpSubmit = (otp) => {
    if(verifyOtp(otp)){
        setIsOtpEntry(false);
        setIsPasswordReset(true);
    }
  };


  const handlePasswordReset = (newPassword) => {
    resetPassword({email, newPassword});
      console.log("Password CHanged")
      setEmail("");
      setIsPasswordReset(false);
      setIsSignIn(true);
    
  };


  const formattedCategories = {};


  const handleClick = () => {
    setMenuOpen(!menuOpen);
    console.log("Category details in side more", categoriesDetails)
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    console.log("selectedCategory",selectedCategory)
    setSubCategoryOpen(true);
  };

  const handleSubCategoryClick = (subcategory) => {
    console.log("Subcategory clicked:", subcategory);
    setMenuOpen(!menuOpen);
    setSubCategoryOpen(!subCategoryOpen);
    setFilters((prevFilters) => ({
      ...prevFilters,
      subcategory:subcategory
      
    }));
  };


  const handleMoreClick = () => {
    
    setCardOpen(!cardOpen);
  };

  const handleDocumentClick = (event) => {
    if (!event.target.closest(".menu-container")) {
      setCardOpen(false);
    }

  };

  const jwtToken = localStorage.getItem("jwtToken");

  const handleCartIconClick = () =>{
    if(jwtToken){
      
      if(cartItemCount>0){
        navigate("/cart");
      }else{
        toast.error("Cart is empty")
      }
    }else{
      toast.error("Login to access cart")
      openPopup();
    }
  }

  const handleProfileClick = () =>{
    console.log(categoriesDetails);
  }

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-[1000]">
      <div className="flex flex-row justify-between items-center h-[4.5rem] px-1 md:px-7">
        <Link to={"/"}>
          <div className="text-4xl font-bold hidden md:block">SHOPIT</div>
        </Link>

        <div className="md:hidden flex justify-center">
          <IconButton
            size="large"
            aria-label="menu"
            onClick={handleClick}
            sx={{ "&:hover": { backgroundColor: "white" } }}
          >
            <Menu fontSize="inherit" />
          </IconButton>
          <IconButton
            size="large"
            aria-label="menu"
            onClick={()=>navigate("/")}
            sx={{ "&:hover": { backgroundColor: "white" } }}
          >
            <HomeIcon fontSize="inherit" />
          </IconButton>
        </div>
        <div className="w-full md:w-2/5">
          <SearchBar filters={filters} setFilters={setFilters}/>
        </div>
        <div className="hidden md:block">
          <CategoryButton categoriesDetails={categoriesDetails} filters={filters} setFilters={setFilters}/>
        </div>
        <div className="lg:flex lg:flex-row lg:items-center lg:justify-end hidden">
            <IconButton size="large" onClick={handleCartIconClick} aria-label="cart" color="inherit">
              <Badge badgeContent={cartItemCount} color="primary">
                <ShoppingCartOutlinedIcon fontSize="inherit" />
              </Badge>
            </IconButton>
          {!role ? (
            <Button variant="contained" onClick={openPopup}>
              SIGN IN
            </Button>
          ):(
            <Link to={"/profile"}>
              <IconButton
                size="large"
                aria-label="account of current user"
                onClick={handleProfileClick}
                color="inherit"
              >
                <AccountCircle  fontSize="inherit"/>
              </IconButton>
            </Link>
        )}
          
          
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
              <div className="my-3" onClick={handleCartIconClick}>
                <Badge badgeContent={cartItemCount} color="primary">
                  <ShoppingCartOutlinedIcon fontSize="medium" />
                </Badge>
                <span className="ml-2">Cart</span>
              </div>
          </div>
          <div className="flex items-center hover:bg-[#F1F2F4] cursor-pointer px-5">
            <div className="my-3" onClick={role ? ()=>{navigate("/profile")}:openPopup}>
              <AccountCircle fontSize="medium" />
              <span className="ml-2">{role ? "User":"SIGN IN"}</span>
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

        {
          categoriesDetails && categoriesDetails?.map((category)=>(
            <ListItem
             key={category.categoryId}
             onClick={() => handleCategoryClick(category)}
            >
              <ListItemText primary={category.categoryName}/>
            </ListItem>
          ))
        }
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
          {selectedCategory && selectedCategory.subCategories?.map((subcategory) => (
            <Link to={"/search"} state={{fromSearchBar:{filters:filters, subcategory:subcategory.subCategoryName}}}>
              <ListItem
                button
                key={subcategory.subCategoryId}
                onClick={() => handleSubCategoryClick(subcategory)}
              >
                <ListItemText primary={subcategory.subCategoryName} />
              </ListItem>
              </Link>
            ))}
        </List>
      </Drawer>

      {isPopupOpen && (
        <Popup open={isPopupOpen}  onClose={closePopup} className="z-[2000]">
        <div >
          {isSignIn && (
              <SignIn
                toggleSignupSigninForm={toggleSignupSigninForm}
                handleForgotPassword={handleForgotPassword}

              />
            )}

            {isSignUp && (
              <SignUp toggleSignupSigninForm={toggleSignupSigninForm} />
            )}

            {isForgotPassword && (
              <SendOtp
                email={email}
                handleSendOtp={handleSendOtp}
                handleBackToLogin={() => {setIsForgotPassword(false); setIsSignIn(true);}}
                loading={loading}

              />
            )}

            {isOtpEntry && (
              <OtpEntry
              email={email}
                handleOtpSubmit={handleOtpSubmit}
                handleResendOTP={handleResendOTP}
                loading = {loading}
              />
            )}

            {isPasswordReset && (
              <PasswordReset
                handlePasswordReset={handlePasswordReset}
              />
            )}
        </div>
          
        </Popup>
      )}
    </div>
  );
};

export default NavBar;
