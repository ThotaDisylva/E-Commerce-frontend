import { createContext, useState, useContext} from 'react';

export const UserInfoContext = createContext();

//making customise context hook 
export const useUserInfoContext = () => {
    return useContext(UserInfoContext);
}

export const UserInfoContextProvider = ({ children }) => {
    const [role, setRole] = useState(null);
    const [cartItemsInfo, setCartItemsInfo] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);
    const [priceDetails, setPriceDetails] = useState({});
    const [choosedAddress, setChoosedAddress] = useState({});

    return <UserInfoContext.Provider value={{role, setRole, cartItemsInfo, setCartItemsInfo, cartItemCount, setCartItemCount, priceDetails, setPriceDetails, choosedAddress, setChoosedAddress}}>
        {children}
    </UserInfoContext.Provider>
}
