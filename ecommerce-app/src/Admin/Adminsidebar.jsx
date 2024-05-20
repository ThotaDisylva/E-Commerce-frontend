import React, { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, CssBaseline } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const drawerWidth = 240;
const menu = [
    { name: "Dashboard", path: "/", icon: <DashboardIcon /> },
    { name: "Products", path: "/products", icon: <ShoppingCartIcon /> },
    { name: "Orders", path: "/orders", icon: <LocalGroceryStoreIcon /> },
    { name: "Add Products", path: "/addproduct", icon: <AddShoppingCartIcon /> }
];

export const Adminsidebar = ({ children }) => {
    const theme = useTheme();
    const drawer = (
        <Box
            sx={{
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%"
            }}
        >
            <List>
                {menu.map((item) => (
                    <ListItem key={item.name} disablePadding >
                        {/* Use Link component instead of ListItemButton */}
                        <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <ListItemButton>
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
                    <Link to="/account" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText>Account</ListItemText>
                        </ListItemButton>
                    </Link>
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
