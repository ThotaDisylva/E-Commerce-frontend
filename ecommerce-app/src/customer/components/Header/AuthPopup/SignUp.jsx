import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Checkbox, CircularProgress } from '@mui/material';
import './SignUp.css';
import useSignup from '../../../../hooks/useSignup';
import { Link } from 'react-router-dom';
import { useUserInfoContext } from '../../../../context/UserInfoContext';

const SignUp = ({ toggleForm }) => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    role: 'user', // default role is 'user'
  });

  const { loading, signup } = useSignup();
  const { role } = useUserInfoContext();

  const [registerAsManager, setRegisterAsManager] = useState(false);

  const handleInputChange =  (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (event) => {
    setRegisterAsManager(event.target.checked);
  };

const handleSubmit = async (event) => {
  event.preventDefault();
    // const role = registerAsManager ? 'admin' : 'user';
    // const formDataWithRole = { ...formData, role };
    // await signup(formDataWithRole);
};

const handleRegister = async () => {
    const role = registerAsManager ? 'admin' : 'user';
    const formDataWithRole = { ...formData, role };
    await signup(formDataWithRole);
};


  return (
    <Box className="wrapper" sx={{ maxWidth: 400, mx: 'auto', my: 4, zIndex: 1500, position: 'relative' }}>
      <Typography className="form-heading" variant="h4" align="center" gutterBottom>
        Sign up
      </Typography>
      <form className="form-container" onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" gap={2}>
          <Box display="flex" gap={2}>
            <TextField
              label="First name"
              type="text"
              variant="outlined"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <TextField
              label="Last name"
              type="text"
              variant="outlined"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </Box>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <TextField
            label="Phone Number"
            type="tel"
            variant="outlined"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
          <Box display="flex" alignItems="center" sx={{ mt: -1.5, mb: -1.5 }} flex="1" className="space-x-1">
            <Checkbox checked={registerAsManager} onChange={handleCheckboxChange} />
            <Typography variant="body1" sx={{ fontSize: 14, ml: -1 }}>
              Register as Admin
            </Typography>
          </Box>
          <Link to={role==="admin"? "/admin":"/"}>
            <Button variant="contained" disabled={loading} type="submit" onClick={handleRegister}fullWidth >
              {loading ? <CircularProgress size={"20px"}/> : "Register"}
            </Button>
          </Link>
          <Box textAlign="center">
            <Typography variant="body2">
              If you already have an account?{' '}
              <a href="#" onClick={toggleForm} className="text-blue-600">
                Sign in
              </a>
            </Typography>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default SignUp;
