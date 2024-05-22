// import React, { useState } from 'react';
// import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
// import "./SignIn.css";
// import useSignin from '../../../../hooks/useSignin';

// const SignIn = ({ toggleForm }) => {

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const { loading, signin }=useSignin();

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     await signin({ email, password });
//   };

//   return (
//     <Box className='wrapper' sx={{ maxWidth: 400, mx: 'auto', my: 4, zIndex: 1500, position: 'relative' }}>
//       <Typography className="form-heading" variant="h4" align="center" gutterBottom>
//         Login
//       </Typography>
//       <form className="form-container" onSubmit={handleSubmit} noValidate autoComplete='off'>
//         <Box display="flex" flexDirection="column" gap={2}>
//           <TextField
//             label="Email"
//             type="email"
//             variant="outlined"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <TextField
//             label="Password"
//             type="password"
//             variant="outlined"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <Box display="flex" justifyContent="flex-end" sx={{ mt: -0.5 ,mb: 1}}>
//             <Typography variant="body2">
//               <a href="#" className='text-blue-600'>Forgot Password?</a>
//             </Typography>
//           </Box>

//           <Box display="flex" gap={2}></Box>

//           <Button variant="contained" disabled={loading} type="submit" fullWidth sx={{ mt: -3 }}>
//             {loading ? <CircularProgress size={"20px"}/> : "Login"}
//           </Button>
//           <Box textAlign="center">
//             <Typography variant="body2">
//               New User? <a href="#" onClick={toggleForm} className='text-blue-600'>Sign up</a>
//             </Typography>
//           </Box>
//         </Box>
//       </form>
//     </Box>
//   );
// };

// export default SignIn;

import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import "./SignIn.css";
import OtpEntry from './otpEntry';
import PasswordReset from './PasswordReset'; 
import useSignin from '../../../../hooks/useSignin';


const SignIn = ({ toggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [showOtpEntry, setShowOtpEntry] = useState(false);
  const [showPasswordReset, setShowPasswordReset] = useState(false);

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };

  const handleSendOtp = async () => {
    try {
      const response = await fetch('/api/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: forgotPasswordEmail })
      });

      if (response.ok) {
        setOtpSent(true);
        setShowOtpEntry(true);
      } else {
        alert('Failed to send OTP');
      }
    } catch (error) {
      alert('An error occurred');
    }
  };

  const handleOtpSubmit = (otp) => {
    // Handle OTP verification logic here
    setShowOtpEntry(false);
    setShowPasswordReset(true);
  };

  const handlePasswordReset = (newPassword) => {
    // Handle password reset logic here
    alert(`Password reset successfully: ${newPassword}`);
    setShowPasswordReset(false);
    setShowForgotPassword(false);
    setOtpSent(false);
  };

  return (
    <Box className='wrapper' sx={{ maxWidth: 400, mx: 'auto', my: 4, zIndex: 1500, position: 'relative' }}>
      <Typography className="form-heading" variant="h4" align="center" gutterBottom>
        Sign In
      </Typography>
      {!showForgotPassword && !showOtpEntry && !showPasswordReset ? (
        <form className="form-container">
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Box display="flex" justifyContent="flex-end" sx={{ mt: -0.5, mb: 1 }}>
              <Typography variant="body2">
                <a href="#" className='text-blue-600' onClick={handleForgotPasswordClick}>Forgot Password?</a>
              </Typography>
            </Box>
            <Box display='flex' gap={2}></Box>
            <Button variant="contained" type="submit" fullWidth sx={{ mt: -3 }}>
              Sign in
            </Button>
            <Box textAlign="center">
              <Typography variant="body2">
                New User? <a href="#" onClick={toggleForm} className='text-blue-600'>Sign up</a>
              </Typography>
            </Box>
          </Box>
        </form>
      ) : showOtpEntry ? (
        <OtpEntry handleOtpSubmit={handleOtpSubmit} handleBack={() => setShowOtpEntry(false)} />
      ) : showPasswordReset ? (
        <PasswordReset handlePasswordReset={handlePasswordReset} handleBackToLogin={() => {
          setShowPasswordReset(false);
          setShowForgotPassword(false);
        }} />
      ) : (
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Enter your email"
            type="email"
            variant="outlined"
            required
            value={forgotPasswordEmail}
            onChange={(e) => setForgotPasswordEmail(e.target.value)}
          />
          <Button variant="contained" onClick={handleSendOtp} fullWidth>
            Send OTP
          </Button>
          {otpSent && <Typography variant="body2">Check your email for the OTP</Typography>}
          <Button variant="text" onClick={() => setShowForgotPassword(false)}>
            Back to Sign in
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default SignIn;
