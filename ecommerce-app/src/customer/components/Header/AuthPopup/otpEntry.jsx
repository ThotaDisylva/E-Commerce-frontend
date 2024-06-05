
import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Grid, CircularProgress } from '@mui/material';
import ClearIcon from "@mui/icons-material/Clear";

const OtpEntry = ({email, handleOtpSubmit, handleResendOTP, loading }) => {
  const [otp, setOtp] = useState('');

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh', px: 2}}>
    
      <div>
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          sx={{
            p: 3,
            border: '1px solid #ccc',
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: 'background.paper',
            maxWidth:"400px"
          }}
        >
          <Typography variant="h5" align="left" >
          Verification required
          </Typography>
          <p>To continue, complete this verification step. We've sent an OTP to the email {email}. Please enter it below to complete verification.</p>
          <TextField
            label="OTP"
            variant="outlined"
            type='number'
            required
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            fullWidth
          />
          <Button variant="contained" onClick={() => handleOtpSubmit(otp)} fullWidth>
            Verify OTP
          </Button>
          <Button variant="text" disabled={loading} onClick={()=>handleResendOTP()} fullWidth>
            {loading ? <CircularProgress size={"20px"}/> : "Resend Otp"}
          </Button>
        </Box>
      </div>
    </Grid>
  );
};

export default OtpEntry;
