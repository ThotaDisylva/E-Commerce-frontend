
import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Grid } from '@mui/material';
import ClearIcon from "@mui/icons-material/Clear";

const OtpEntry = ({ handleOtpSubmit, handleBack }) => {
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
          <Typography variant="h5" align="center" gutterBottom>
            Enter OTP
          </Typography>
          <TextField
            label="OTP"
            variant="outlined"
            required
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            fullWidth
          />
          <Button variant="contained" onClick={() => handleOtpSubmit(otp)} fullWidth>
            Verify OTP
          </Button>
          <Button variant="text" onClick={handleBack} fullWidth>
            Back to Forgot Password
          </Button>
        </Box>
      </div>
    </Grid>
  );
};

export default OtpEntry;
