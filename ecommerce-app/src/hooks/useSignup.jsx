import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useUserInfoContext } from '../context/UserInfoContext';
import { useNavigate } from 'react-router-dom';
import useCartPageInfo from './useCartPageInfo';

const useSignup =() => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const {setRole} = useUserInfoContext();
    const navigate = useNavigate();
    const {cartPageInfo} = useCartPageInfo();

    const signup = async ({ firstName, lastName, email, password, phoneNumber, role }) => {

        console.log("inside signup hook func")
        const success = handleInputErrors({ firstName, lastName, email, password, phoneNumber, role },setError);
        if (!success) return;

        console.log("checked")

        setLoading(true);
        try {
            const res = await fetch("http://localhost:8080/auth/signup",{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ firstName, lastName, email, password, phoneNumber, role })
            })

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            console.log("data"+data);


            setRole(data?.role);
        
            localStorage.setItem("role", data?.role);
            localStorage.setItem("jwtToken", data?.jwtToken);
            localStorage.setItem("userId", data?.userId);

            if(data.role === "admin"){
                navigate("/admin")
            }else{
                cartPageInfo();
                navigate("/")
            }

        } catch (error) {
            console.error(error.message);
            if (error.message.includes('User already exists')) {
                toast.error('User already exists.');
            }else {
                toast.error('An error occurred. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    }
    return { loading, signup,error };
}

export default useSignup

function handleInputErrors({ firstName, lastName, email, password, phoneNumber, role },setError) {
    if (!firstName || !lastName || !email || !password || !phoneNumber || !role) {
        toast.error('Please fill in all fields');
        return false;
    }

    if (password.length < 6) {
        toast.error('Password must be atleast 6 characters');
        return false;
    }

    if(phoneNumber.length!==10){
        setError('Phone number must be exactly 10 digits.')
        return false;
    }else{
        setError('')
    }

    return true;
}