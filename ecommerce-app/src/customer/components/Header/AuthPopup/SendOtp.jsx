import React, { useState } from 'react';
import { Button, CircularProgress, TextField, Typography } from '@mui/material';
import './SendOtp.css';

const SendOtp = ({ email, handleSendOtp, handleBackToLogin, loading }) => {
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
        <Button variant="contained" disabled={loading} onClick={()=>handleSendOtp(enteredEmail)} fullWidth>
          {loading ? <CircularProgress size={"20px"}/> : "Send OTP"}
        </Button>
        <Button variant="text" onClick={handleBackToLogin} fullWidth>
          Back to Login
        </Button>
      </div>
    </div>
  );
};

export default SendOtp;
