import React, { useState } from 'react';
import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
import "./SignIn.css";
import useSignin from '../../../../hooks/useSignin';
import { useUserInfoContext } from '../../../../context/UserInfoContext';

const SignIn = ({ toggleForm }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loading, signin }=useSignin();
  const { role } = useUserInfoContext();

  const handleSubmit = async(e) => {
    e.preventDefault();
    await signin({ email, password });
  };

  return (
    <Box className='wrapper' sx={{ maxWidth: 400, mx: 'auto', my: 4, zIndex: 1500, position: 'relative' }}>
      <Typography className="form-heading" variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <form className="form-container" onSubmit={handleSubmit} noValidate autoComplete='off'>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Box display="flex" justifyContent="flex-end" sx={{ mt: -0.5 ,mb: 1}}>
            <Typography variant="body2">
              <a href="#" className='text-blue-600'>Forgot Password?</a>
            </Typography>
          </Box>

          <Box display="flex" gap={2}></Box>

          {/* <Link to={role==="admin"? "/admin":"/"}> */}
            <Button variant="contained" disabled={loading} type="submit" fullWidth sx={{ mt: -3 }}>
              {loading ? <CircularProgress size={"20px"}/> : "Login"}
            </Button>
          {/* </Link> */}
          
          <Box textAlign="center">
            <Typography variant="body2">
              New User? <a href="#" onClick={toggleForm} className='text-blue-600'>Sign up</a>
            </Typography>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default SignIn;

