import React, { useEffect, useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';

const useAddressInfo = () => {

    const [loading, setLoading] = useState(false);
    const [savedAddresses, setSavedAddresses] = useState([])
    const jwtToken = localStorage.getItem("jwtToken");

    const loadSavedAddress = async() =>{
        setLoading(true)
        if (jwtToken) {
            try {
                const response = await axios.get('http://localhost:8080/api/addresses/getAll', {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`
                    }
                });
                if (response.status === 200) {
                    const data = response.data;
                    setSavedAddresses(data.addresses);
                    console.log("Addresses fetched successfully:", data);
                } else {
                    console.error("Unexpected response status:", response.status);
                }
            } catch (error) {
                console.error("Error fetching saved addresses:", error.response ? error.response.data : error.message);
            }finally{
                setLoading(false)
            }
        }else{
            console.error("JWT Token not found in local storage");
            setLoading(false);
        }
    }

    useEffect(()=>{
        loadSavedAddress();
    },[])

    const addAddress= async(addressInfo) =>{
        const success = handleInputErrors(addressInfo);

        if(!success) return;

        console.log("Input address info checked!")
        console.log(addressInfo)

        setLoading(true);
        if (jwtToken) {
            try {
                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}`,
                };
                console.log("Headers being sent:", headers);
                console.log(addressInfo)
    
                const response = await axios.post("http://localhost:8080/api/addresses/add", addressInfo, { headers });
    
                if (response.status === 201) {
                    console.log("Address added successfully!");
                    toast.success('Address added!');
                    setSavedAddresses(prevAddresses => [...prevAddresses,addressInfo ]);
                } else {
                    console.error("Unexpected response status:", response.status);
                }
            } catch (error) {
                console.error("Error adding address info:", error.response ? error.response.data : error.message);
            } finally {
                setLoading(false);
            }
        } else {
            console.error("JWT Token not found in local storage");
            setLoading(false);
        }
    }

    const updateAddress = async(addressInfo) =>{
        const success = handleInputErrors(addressInfo);

        if(!success) return;

        console.log("updated profile info checked!")
        console.log(addressInfo)

        setLoading(true);
        if (jwtToken) {
            try {
                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}`,
                };
                console.log("Headers being sent:", headers);

                const {addressId,userId, ...updateBody} =addressInfo;
                console.log(updateBody);
    
                const response = await axios.put(`http://localhost:8080/api/addresses/update/${addressInfo.addressId}`, updateBody, { headers });
    
                if (response.status === 200) {
                    console.log("Address updated successfully!");
                    setSavedAddresses(prevAddresses =>
                        prevAddresses.map(address =>
                          address.addressId === addressInfo.addressId? { ...address, ...addressInfo } : address
                        )
                      );
                    toast.success('Address updated!');
                } else {
                    console.error("Unexpected response status:", response.status);
                }
            } catch (error) {
                console.error("Error updating address info:", error.response ? error.response.data : error.message);
            } finally {
                setLoading(false);
            }
        } else {
            console.error("JWT Token not found in local storage");
            setLoading(false);
        }


    }
  return {loading, savedAddresses, addAddress, updateAddress}
}

export default useAddressInfo


function handleInputErrors(addressInfo) {
    if (!addressInfo.name || !addressInfo.phoneNumber || !addressInfo.address || !addressInfo.city || !addressInfo.state || !addressInfo.postalCode) {
        toast.error('Please fill in all fields');
        return false;
    }

    return true;
}