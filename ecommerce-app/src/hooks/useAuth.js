import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {

    const navigate = useNavigate();
    
    
const checkExpiry = async () => {

    const jwtToken = localStorage.getItem("jwtToken");
    if (jwtToken) {
    try {
        const response = await axios.get(`http://localhost:8080/auth/check/token/expiry`,{ token: `Bearer ${jwtToken}`},
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        if(response.status === 200){
            console.log("Token not Expired")
        }else{
            console.log("Token expired")
            localStorage.clear();
            navigate("/");
        }
    } catch (error) {
        console.error('Error checking expiry', error);
        throw error;
    }}
};
  return {checkExpiry}
}

export default useAuth;
