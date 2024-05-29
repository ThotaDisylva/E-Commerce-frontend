import { createContext, useState, useContext, useEffect} from 'react';

export const UserInfoContext = createContext();

//making customise context hook 
export const useUserInfoContext = () => {
    return useContext(UserInfoContext);
}

export const UserInfoContextProvider = ({ children }) => {
    const [role, setRole] = useState(localStorage.getItem("role") || null);
    const [cartItemsInfo, setCartItemsInfo] = useState(JSON.parse(localStorage.getItem("cart_items_info")) || {});
    const [cartItemCount, setCartItemCount] = useState(localStorage.getItem("cart_items_count") || 0);
    const [priceDetails, setPriceDetails] = useState(JSON.parse(localStorage.getItem("cart_price_details")) || {});
    const [choosedAddress, setChoosedAddress] = useState({});

    const storedCategoriesDetails = localStorage.getItem('categories_details');
  let parsedCategoriesDetails = [];
  try {
    parsedCategoriesDetails = storedCategoriesDetails ? JSON.parse(storedCategoriesDetails) : [];
  } catch (error) {
    console.error('Error parsing categories_details:', error);
  }

  const [categoriesDetails, setCategoriesDetails] = useState(parsedCategoriesDetails);

  useEffect(() => {
    console.log('categoriesDetails state:', categoriesDetails);
  }, [categoriesDetails]);
  
    return <UserInfoContext.Provider value={{role, setRole, cartItemsInfo, setCartItemsInfo, cartItemCount, setCartItemCount, priceDetails, setPriceDetails, choosedAddress, setChoosedAddress, categoriesDetails, setCategoriesDetails}}>
        {children}
    </UserInfoContext.Provider>
}
