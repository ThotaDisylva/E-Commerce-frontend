import React from 'react';
import { Button } from '@mui/material';
import AddressCard from '../../../components/SavedAddress/AddressCard';
function SavedAddressPage (){
    return(
        <div className='w-full'>
            <div className='w-full flex justify-end'>
            <Button className='w-fit'
          variant="contained"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            padding: "8px 16px",
            borderRadius: "5px",
            border: "none",
            marginTop: "5px",
          }}
        >
          Add Address
        </Button>
        </div>
        <div className='w-full lg:w-[90%] h-fit pt-10 pb-5 px-2 md:p-10'>
            <AddressCard/>
        </div>
        </div>
    );
}
export default SavedAddressPage;