import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useUserInfoContext } from '../context/UserInfoContext';

const useProfileInfo = () => {

    const [profileInfo, setProfileInfo] = useState({});
    const [loading, setLoading] = useState(false);
    const jwtToken = localStorage.getItem("jwtToken");
    const navigate = useNavigate();
    const {setRole} = useUserInfoContext();

    const loadProfileInfo = async ()=>{

        
        setLoading(true);
        if(jwtToken){
            try {
                const response = await axios.get(`http://localhost:8080/api/user/profile/get`,{
                    headers : {
                        Authorization : `Bearer ${jwtToken}`
                    }
                });

                const data = response.data;
                setProfileInfo(data);
                console.log("profileInfo inside hook", profileInfo);

            } catch (error) {
                console.error("Error fetching profile page info:",error)
            }finally {
                setLoading(false)
            }

        } else {
            console.error("JWT Token not found in local storage");
            setLoading(false);
        }
    }

    useEffect(()=>{
        loadProfileInfo();
    },[]);

    const updateProfileInfo = async (updatedProfileInfo) =>{

        const success = handleUpdateErrors(updatedProfileInfo);

        if(!success) return;

        console.log("updated profile info checked!")
        console.log(updatedProfileInfo)

        setLoading(true);
        if (jwtToken) {
            try {
                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}`,
                };
                console.log("Headers being sent:", headers);
    
                const response = await axios.put("http://localhost:8080/api/user/profile/update", updatedProfileInfo, { headers });
    
                if (response.status === 200) {
                    console.log("Profile updated successfully!");
                    toast.success('Profile updated!');
                    setProfileInfo(updatedProfileInfo)
                } else {
                    console.error("Unexpected response status:", response.status);
                }
            } catch (error) {
                console.error("Error updating profile page info:", error.response ? error.response.data : error.message);
            } finally {
                setLoading(false);
            }
        } else {
            console.error("JWT Token not found in local storage");
            setLoading(false);
        }
    };

    const deleteUser = async() => {
        setLoading(true)
        if(jwtToken){
            try{
                const response = await axios.delete("http://localhost:8080/api/user/profile/delete",{
                    headers : {
                        Authorization : `Bearer ${jwtToken}`
                    }
                });

                if (response.status === 200) {
                    console.log("User deleted successfully!");
                    localStorage.clear();
                    setRole(null);
                    navigate("/");
                } else {
                    console.error("Unexpected response status:", response.status);
                }
            } catch (error) {
                console.error("Error deleting user:", error.response ? error.response.data : error.message);
            } finally {
                setLoading(false);
            }
        }else{
            console.error("JWT Token not found in local storage");
            setLoading(false);
        }
    }

  return {profileInfo, loadProfileInfo, loading, updateProfileInfo, deleteUser};
}

export default useProfileInfo

function handleUpdateErrors(updatedProfileInfo) {
    if (!updatedProfileInfo.firstName || !updatedProfileInfo.lastName || !updatedProfileInfo.email || !updatedProfileInfo.phoneNumber) {
        toast.error('Please fill in all fields');
        return false;
    }

    return true;
}
