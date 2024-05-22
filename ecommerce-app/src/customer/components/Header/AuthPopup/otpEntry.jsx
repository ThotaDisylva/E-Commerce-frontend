// import React, { useState } from 'react';
// import { Box, Button, TextField, Typography } from '@mui/material';

// const OtpEntry = ({ handleOtpSubmit, handleBack }) => {
//   const [otp, setOtp] = useState('');

//   return (
//     <Box display="flex" flexDirection="column" gap={2}>
//       <Typography variant="h5" align="center">Enter OTP</Typography>
//       <TextField
//         label="OTP"
//         variant="outlined"
//         required
//         value={otp}
//         onChange={(e) => setOtp(e.target.value)}
//       />
//       <Button variant="contained" onClick={() => handleOtpSubmit(otp)} fullWidth>
//         Submit OTP
//       </Button>
//       <Button variant="text" onClick={handleBack}>
//         Back to Forgot Password
//       </Button>
//     </Box>
//   );
// };

// export default OtpEntry;

import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Grid } from '@mui/material';

const OtpEntry = ({ handleOtpSubmit, handleBack }) => {
  const [otp, setOtp] = useState('');

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh', px: 2 }}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
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
            Submit OTP
          </Button>
          <Button variant="text" onClick={handleBack} fullWidth>
            Back to Forgot Password
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default OtpEntry;
