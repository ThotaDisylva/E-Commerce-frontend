
import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Grid } from '@mui/material';
import ClearIcon from "@mui/icons-material/Clear";
import toast from 'react-hot-toast';

const PasswordReset = ({ handlePasswordReset}) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleSubmit = () => {
    if(newPassword !==""){
      if (newPassword === confirmPassword) {
        handlePasswordReset(newPassword);
      } else {
          toast.error("Passwords do not match")
          console.log("Passwords do not match")
      }
    }else{
      toast.error("Password not entered")
      console.log("Password not entered")
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh', px: 2 }}>

      <div className='w-[400px]'>
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          sx={{
            p: 3,
            border: '1px solid #ccc',
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: 'background.paper'
          }}
        >
          <Typography variant="h5" align="center" gutterBottom>
            Reset Password
          </Typography>
          <TextField
            label="New Password"
            type="password"
            variant="outlined"
            required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            fullWidth
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
          />
          <Button variant="contained" onClick={handleSubmit} fullWidth>
            Save Changes
          </Button>
        </Box>
      </div>
    </Grid>
  );
};

export default PasswordReset;
