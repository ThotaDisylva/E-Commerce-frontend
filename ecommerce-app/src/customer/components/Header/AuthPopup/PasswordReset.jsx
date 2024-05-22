// import React, { useState } from 'react';
// import { Box, Button, TextField, Typography } from '@mui/material';

// const PasswordReset = ({ handlePasswordReset, handleBackToLogin }) => {
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSubmit = () => {
//     if (newPassword === confirmPassword) {
//       handlePasswordReset(newPassword);
//     } else {
//       alert("Passwords do not match");
//     }
//   };

//   return (
//     <Box display="flex" flexDirection="column" gap={2}>
//       <Typography variant="h5" align="center">Reset Password</Typography>
//       <TextField
//         label="New Password"
//         type="password"
//         variant="outlined"
//         required
//         value={newPassword}
//         onChange={(e) => setNewPassword(e.target.value)}
//         fullWidth
//       />
//       <TextField
//         label="Confirm Password"
//         type="password"
//         variant="outlined"
//         required
//         value={confirmPassword}
//         onChange={(e) => setConfirmPassword(e.target.value)}
//         fullWidth
//       />
//       <Button variant="contained" onClick={handleSubmit} fullWidth>
//         Reset Password
//       </Button>
//       <Button variant="text" onClick={handleBackToLogin} fullWidth>
//         Back to Login
//       </Button>
//     </Box>
//   );
// };

// export default PasswordReset;
import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Grid } from '@mui/material';

const PasswordReset = ({ handlePasswordReset, handleBackToLogin }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    if (newPassword === confirmPassword) {
      handlePasswordReset(newPassword);
    } else {
      alert("Passwords do not match");
    }
  };

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
            Reset Password
          </Button>
          <Button variant="text" onClick={handleBackToLogin} fullWidth>
            Back to Login
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default PasswordReset;
