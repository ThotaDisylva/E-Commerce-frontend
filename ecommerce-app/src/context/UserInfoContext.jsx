import { createContext, useState, useContext} from 'react';

export const UserInfoContext = createContext();

//making customise context hook 
export const useUserInfoContext = () => {
    return useContext(UserInfoContext);
}

export const UserInfoContextProvider = ({ children }) => {
    const [role, setRole] = useState(localStorage.getItem("role") || null);
    const [cartItemsInfo, setCartItemsInfo] = useState(localStorage.getItem("cart_items_info") || []);
    const [cartItemCount, setCartItemCount] = useState(localStorage.getItem("cart_items_count") || 0);
    const [priceDetails, setPriceDetails] = useState(localStorage.getItem("cart_price_details") || {});
    const [choosedAddress, setChoosedAddress] = useState({});

    return <UserInfoContext.Provider value={{role, setRole, cartItemsInfo, setCartItemsInfo, cartItemCount, setCartItemCount, priceDetails, setPriceDetails, choosedAddress, setChoosedAddress}}>
        {children}
    </UserInfoContext.Provider>
}
