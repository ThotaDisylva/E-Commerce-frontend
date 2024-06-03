import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import addProductService from '../../../hooks/UseaddProductService';
import getCategories from '../../../hooks/UseGetCategories';
import getSubcategories from '../../../hooks/UseGetSubcategories';
import addCategory from '../../../hooks/UseCreateCategory';
import addSubCategory from '../../../hooks/UseCreateSubCategory';

export const Addproducts = () => {

  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);
  const [subCategoryToggle, setSubCategoryToggle] = useState(false);
  const [subcategories, setSubCategories] = useState([]);
  const [newSubCategory, setNewSubCategory] = useState('');
  const [showNewSubCategoryInput, setShowNewSubCategoryInput] = useState(false);


  const handleInputChange = (event) => {
    setNewCategory(event.target.value);
  };
  const handleCategorySelect = async (e) => {
    handleChange({ target: { name: 'category', value: e.target.value } });
    loadSubcategories(e.target.value);
    setSubCategoryToggle(true);
  }

  const handleToggleInput = () => {
    setShowNewCategoryInput(true);
  };

  const handleInputChangeSubCategory = (event) => {
    setNewSubCategory(event.target.value);
  };

  const handleAddSubCategory = () => {
    if (newSubCategory.trim() !== '') {
      setSubCategories([...subcategories, newSubCategory.trim()]);
      setNewSubCategory('');
      addSubCategory(product.category, newSubCategory)
    }
  };

  const handleToggleInputSubCategory = () => {
    setShowNewSubCategoryInput(true);
  };

  const [product, setProduct] = useState({
    imageUrl: '',
    title: '',
    subtitle: '',
    brand: '',
    quantityAvailable: '',
    price: '',
    discountPercent: '',
    deliveryCharges: '',
    category: '',
    subCategory: '',
    description: '',
    productHighlights: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const loadSubcategories = async (category) => {
    try {
      console.log(category);
      const fetchedSubcategories = await getSubcategories(category);
      setSubCategories(fetchedSubcategories.map(subcat => subcat.subCategoryName));
    } catch (error) {
      console.error('Error fetching subcategories:', error);
    }
  };
  const fetchCategories = async () => {
    try {
      const fetchedCategories = await getCategories();

      setCategories(fetchedCategories.map(cat => cat.categoryName));
      console.log(categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
    console.log(categories);
  }, [])

  window.onload = fetchCategories;
  const handleAddCategory = () => {
    try {
      const addedCategory = addCategory(newCategory);
      console.log('Category added successfully:', addedCategory);
      setCategories([...categories, newCategory])
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { addProduct } = addProductService();
      const addedProduct = await addProduct({ product });
      console.log('Product added successfully:', addedProduct);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className='h-full bg-white'>
      <div className='font-bold text-3xl text-center'>Add new Product</div>
      <hr />
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '75%' },
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField id="outlined-basic" label="Image Url" variant="outlined" value={product.imageUrl} name='imageUrl' onChange={handleChange} required />
        <Box style={{ display: 'flex', gap: '10px' }}>
          <TextField id="outlined-basic" label="Title" variant="outlined" sx={{ width: '50%' }} value={product.title} name='title' onChange={handleChange} required />
          <TextField id="outlined-basic" label="Subtitle" variant="outlined" sx={{ width: '50%' }} value={product.subtitle} name='subtitle' onChange={handleChange} required />
        </Box>
        <Box style={{ display: 'flex', gap: '10px' }}>
          <TextField id="outlined-basic" label="Brand" variant="outlined" sx={{ width: '50%' }} value={product.brand} name='brand'
            onChange={handleChange} required />
          <TextField id="outlined-basic" type='number' step label="Quantity" variant="outlined" sx={{ width: '50%' }} value={product.quantityAvailable} name='quantityAvailable'
            onChange={handleChange} required />
        </Box>
        <Box style={{ display: 'flex', gap: '10px' }}>
          <TextField id="outlined-basic" label="Price" type='number' variant="outlined" sx={{ width: '33%' }} value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })} required />
          <TextField id="outlined-basic" label="Discounted Percent" type='number' variant="outlined" sx={{ width: '33%' }} value={product.discountPercent}
            onChange={(e) => setProduct({ ...product, discountPercent: e.target.value })} />
          <TextField id="outlined-basic" label="Delivery Charges" type='number' variant="outlined" sx={{ width: '33%' }} value={product.deliveryCharges}
            onChange={(e) => setProduct({ ...product, deliveryCharges: e.target.value })} required />
        </Box>


        <Box style={{ display: 'flex', gap: '10px' }}>
          <TextField
            select
            label="Category"
            value={product.category}
            onChange={(e) => handleCategorySelect(e)}
            fullWidth
            variant="outlined"
            required
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>
          {showNewCategoryInput ? (
            <TextField
              label="Enter New Category"
              value={newCategory}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
            />
          ) : (
            <Button onClick={handleToggleInput} variant="outlined" sx={{ mt: 0 }}>
              Add New
            </Button>
          )}
          {showNewCategoryInput && (
            <Button onClick={handleAddCategory} variant="contained" sx={{ mt: 0 }}>
              Add
            </Button>
          )}
        </Box>

        {subCategoryToggle && (
          <Box style={{ display: 'flex', gap: '10px' }}>
            <TextField
              select
              label="SubCategory"
              value={product.subCategory}
              onChange={(e) => handleChange({ target: { name: 'subCategory', value: e.target.value } })}
              fullWidth
              variant="outlined"
              required
            >
              {subcategories.map((subcategory) => (
                <MenuItem key={subcategory} value={subcategory}>
                  {subcategory}
                </MenuItem>
              ))}
            </TextField>
            {showNewSubCategoryInput ? (
              <TextField
                label="Enter New Sub Category"
                value={newSubCategory}
                onChange={handleInputChangeSubCategory}
                fullWidth
                variant="outlined"
              />
            ) : (
              <Button onClick={handleToggleInputSubCategory} variant="outlined" sx={{ mt: 0 }}>
                Add New
              </Button>
            )}
            {showNewSubCategoryInput && (
              <Button onClick={handleAddSubCategory} variant="contained" sx={{ mt: 0 }}>
                Add
              </Button>
            )}
          </Box>
        )}

        <Box>
          <TextField id="outlined-multiline-static" label="Description (max characters-300)" multiline rows={4} sx={{ width: '100%' }} value={product.description}
            onChange={(e) => setProduct({ ...product, description: e.target.value })} required />
        </Box>
        <Box>
          <TextField id="outlined-multiline-static" label="Highlights (max characters-300)" multiline rows={4} sx={{ width: '100%' }} value={product.productHighlights}
            onChange={(e) => setProduct({ ...product, productHighlights: e.target.value })} required />
        </Box>
        <Button variant="contained" type='submit'>Add to Products</Button>
      </Box>
    </div>
  )
}
// export default Addproducts
