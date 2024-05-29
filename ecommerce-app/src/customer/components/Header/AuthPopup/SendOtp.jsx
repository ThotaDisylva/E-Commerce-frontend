import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import './SendOtp.css';

const SendOtp = ({ email, handleSendOtp, handleBackToLogin }) => {
    const [enteredEmail, setEnteredEmail] = useState(email); 

  return (
    <div className="send-otp-container ">
      <div className="send-otp-box relative">
      
        <Typography variant="h5" align="center" gutterBottom>
          Send OTP
        </Typography>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          value={enteredEmail}
          onChange={(e)=>setEnteredEmail(e.target.value)}
          fullWidth
        />
        <Button variant="contained" onClick={()=>handleSendOtp(enteredEmail)} fullWidth>
          Send OTP
        </Button>
        <Button variant="text" onClick={handleBackToLogin} fullWidth>
          Back to Login
        </Button>
      </div>
    </div>
  );
};

export default SendOtp;
