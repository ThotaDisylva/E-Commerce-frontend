import React, { useState } from 'react'
import toast from 'react-hot-toast';

const useSignup =() => {
    const [loading, setLoading] = useState(false);

    const signup = async ({ firstName, lastName, email, password, phoneNumber, role }) => {

        console.log("inside signup hook func")
        const success = handleInputErrors({ firstName, lastName, email, password, phoneNumber, role });
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

            localStorage.setItem("ecommerce-app",data); 

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    return { loading, signup };
}

export default useSignup

function handleInputErrors({ firstName, lastName, email, password, phoneNumber, role }) {
    if (!firstName || !lastName || !email || !password || !phoneNumber || !role) {
        toast.error('Please fill in all fields');
        return false;
    }

    if (password.length < 6) {
        toast.error('Password must be atleast 6 characters');
        return false;
    }

    return true;
}