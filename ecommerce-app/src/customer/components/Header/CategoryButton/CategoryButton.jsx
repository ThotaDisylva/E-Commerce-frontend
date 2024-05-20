import React, { useState, useEffect } from 'react';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/solid';
import categories from './categories';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';

function CategoryButton() {
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
    console.log(subcategory.name);
    setActiveSubMenu(subcategory);
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
            {categories.map((category) => (
              <li
                key={category.id}
                className={`px-4 py-2 ${activeSubMenu && activeSubMenu.categoryId === category.id? 'bg-[#b9ccf1]' : 'hover:bg-[#b9ccf1]'}`}
                onMouseEnter={() => handleCategoryClick(category)}
              >
                <div className='flex items-center justify-between'>
                  <span>{category.name}</span>
                  <ChevronRightIcon className="w-5 h-5 ml-2" />
                </div>
                {subMenuOpen && subMenuOpen.id === category.id && (
                  <div className="absolute top-0 left-full w-64 bg-white shadow-md max-h-[35rem] overflow-y-auto">
                    <ul>
                      {category.subcategories.map((subcategory) => (
                        <li
                          key={subcategory.id}
                          className={`px-4 py-2 ${activeSubMenu && activeSubMenu.id === subcategory.id? 'bg-[#b9ccf1]' : 'hover:bg-[#b9ccf1]'}`}
                          onClick={() => handleSubcategoryClick(subcategory)}
                        >
                          <span>{subcategory.name}</span>
                        </li>
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