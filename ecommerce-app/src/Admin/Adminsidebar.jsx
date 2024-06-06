import React, { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, CssBaseline } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import { useUserInfoContext } from '../context/UserInfoContext';
import useProfileInfo from '../hooks/useProfileInfo';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const drawerWidth = 240;
const menu = [
    { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
    { name: "Products", path: "/admin/products", icon: <ShoppingCartIcon /> },
    { name: "Orders", path: "/admin/orders", icon: <ShoppingBagIcon /> },
    { name: "Add Products", path: "/admin/addproduct", icon: <AddShoppingCartIcon /> },
    
];

export const Adminsidebar = ({ children }) => {

    const navigate = useNavigate();
    const {setRole} = useUserInfoContext();
    const firstName = useProfileInfo().profileInfo.firstName;

    const handleLogout = () => {
        localStorage.clear();
        setRole(null);
        navigate("/");
      };
    const drawer = (
        <Box
            sx={{
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
            }}
        >
            <List>
                {menu.map((item) => (
                    <ListItem key={item.name} disablePadding >
                        <Link to={item.path} style={{ width: '100%' }}>
                            <ListItemButton sx={{
                                    '&:hover': {
                                        backgroundColor: '#d3d3d3',
                                    },
                                }}>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText>
                                    {item.name}
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
            <List>
                <ListItem disablePadding>
                    <Link to="/admin/account" style={{ width: '100%' }}>
                        <ListItemButton sx={{
                                    '&:hover': {
                                        backgroundColor: '#d3d3d3',
                                    },
                                }}>
                            <ListItemIcon>
                                <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText>{firstName}</ListItemText>
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding style={{ width: '100%' }}>
                    <ListItemButton onClick={handleLogout} sx={{
                                    '&:hover': {
                                        backgroundColor: '#d3d3d3',
                                    },
                                }}>
                        <ListItemIcon>
                            <LogoutIcon/>
                        </ListItemIcon>
                        <ListItemText >Logout</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                open={true}
                sx={{
                    width: drawerWidth
                }}
            >
                {drawer}
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                {children}
            </Box>
        </Box>
    );
};
