import {React} from 'react'
import toast from 'react-hot-toast';
import { useState } from 'react';

const useSignin = () => {
    const [loading, setLoading] = useState(false);

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

            localStorage.setItem("role", data?.role);
            localStorage.setItem("jwtToken", data?.jwtToken);
            localStorage.setItem("userId", data?.userId);
            setUser(data);

        } catch (error) {
            toast.error(error.message);
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