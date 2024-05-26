import React, { useState, useEffect } from 'react';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/solid';
import categories from './categories';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import SearchPage from '../../../pages/SearchPage/SearchPage';
import { Link } from 'react-router-dom';
import useSearchPage from '../../../../hooks/useSearchPage';

function CategoryButton({categoriesDetails,filters,setFilters}) {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSubMenuClick = (category) => {
    setSubMenuOpen(category);
  };

  const handleDocumentClick = (event) => {
    if (!event.target.closest('.menu-container')) {
      setIsOpen(false);
    }
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setActiveSubMenu(null);
    handleSubMenuClick(category);
  };

  const handleSubcategoryClick = (subcategory) => {
    setActiveSubMenu(subcategory);
    setIsOpen(false);
    console.log(subcategory.subCategoryName)
    setFilters((prevFilters) => ({
      ...prevFilters,
      subcategory:subcategory.subCategoryName
      
    }));
    
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div className="relative menu-container">
      <button
        className="flex items-center justify-between w-full px-4 py-2 text-xl font-medium text-gray-700 hover:text-gray-900 rounded"
        onClick={handleMenuClick}
      >
        <CategoryRoundedIcon sx={{marginRight:"0.5rem"}}/>
        Category
        <ChevronDownIcon className="w-5 h-5 ml-2" />
      </button>


      {isOpen && (
        <div className="absolute top-full left-0 w-64 bg-white shadow-md">
        <ul className="max-h-[35rem] overflow-y-auto">
  {categoriesDetails.map((category) => (
    <li
      key={category.categoryId}
      className={`px-4 py-2 ${activeSubMenu && activeSubMenu.categoryId === category.categoryId ? 'bg-[#b9ccf1]' : 'hover:bg-[#b9ccf1]'}`}
      onMouseEnter={() => handleCategoryClick(category)}
    >
      <div className='flex items-center justify-between'>
        <span>{category.categoryName}</span>
        <ChevronRightIcon className="w-5 h-5 ml-2" />
      </div>
      {subMenuOpen && subMenuOpen.categoryId === category.categoryId && (
        <div className="absolute top-0 left-full w-64 bg-white shadow-md max-h-[35rem] overflow-y-auto">
          <ul>
            {category.subCategories.map((subcategory) => (
              <Link to={"/search"} state={{fromSearchBar:{filters:filters}}}>
              <li
                key={subcategory.subCategoryId}
                className={`px-4 py-2 ${activeSubMenu && activeSubMenu.subCategoryId === subcategory.subCategoryId ? 'bg-[#b9ccf1]' : 'hover:bg-[#b9ccf1]'}`}
                onClick={() => handleSubcategoryClick(subcategory)}
              >
                <span>{subcategory.subCategoryName}</span>
              </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </li>
  ))}
</ul>

        </div>
      )}
    </div>
  );
}

export default CategoryButton;