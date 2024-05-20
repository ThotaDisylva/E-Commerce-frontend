import React from "react";
import { Grid, List, ListItem, ListItemText, Divider } from "@mui/material";

const CategoryDropdown = ({ onClose }) => {
  // Sample category data
  const categories = [
    {
      name: "Electronics",
      subcategories: ["Mobile Phones", "Laptops", "Tablets"],
    },
    {
      name: "Clothing",
      subcategories: ["Men's", "Women's", "Kids"],
    },
    {
      name: "Home & Kitchen",
      subcategories: ["Furniture", "Appliances", "Cookware"],
    },
  ];

  return (
    <Grid container spacing={2}>
      {categories.map((category, index) => (
        <Grid item xs={4} key={index}>
          <List>
            <ListItem>
              <ListItemText primary={category.name} />
            </ListItem>
            {category.subcategories.map((subcategory, subIndex) => (
              <React.Fragment key={subIndex}>
                <ListItem button onClick={onClose}>
                  <ListItemText primary={subcategory} />
                </ListItem>
                {subIndex < category.subcategories.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoryDropdown;
