import {React} from 'react'
import toast from 'react-hot-toast';
import { useState } from 'react';
import { useUserInfoContext } from '../context/UserInfoContext';
import { useNavigate } from 'react-router-dom';
import useCartPageInfo from './useCartPageInfo';

const useSignin = () => {
    const [loading, setLoading] = useState(false);
    const {setRole} = useUserInfoContext();
    const navigate = useNavigate();
    const {cartPageInfo} = useCartPageInfo();

    const signin = async ({ email, password }) => {
        const success = handleInputErrors({email, password});
        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({email, password})
            })

            const data = await res.json();
            console.log("login data: ",data)
            if (data.error) {
                throw new Error(data.error);
            }

            console.log("role after sigin",data.role)

            setRole(data?.role);

            localStorage.setItem("role", data?.role);
            localStorage.setItem("jwtToken", data?.jwtToken);
            localStorage.setItem("userId", data?.userId);

            console.log("JwtToken in signin hook",localStorage.getItem("jwtToken"))

            if(data.role === "admin"){
                navigate("/admin")
            }else{
                cartPageInfo();
                navigate("/")
            }


        } catch (error) {
            console.error(error.message);
            if (error.message.includes('Incorrect password')) {
                toast.error('Incorrect password. Please try again.');
            } else if (error.message.includes('User not found')) {
                toast.error('Account not found. Please check your email.');
            } else {
                toast.error('An error occurred. Please try again.');
            }
        } finally {
            setLoading(false)
        }
    }
    return { loading, signin };
}

export default useSignin

function handleInputErrors({email, password}) {
    if (!email || !password) {
        toast.error('Please fill in all fields');
        return false;
    }

    return true;
}