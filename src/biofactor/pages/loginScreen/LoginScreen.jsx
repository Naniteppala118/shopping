// LoginScreen.jsx
import React, { useState } from 'react';
import Button from '../../../reusableComponents/buttonWidget/Button';
import TextField from '../../../reusableComponents/textFieldWidget/TextField';
import { FiEye, FiEyeOff, FiPhone } from 'react-icons/fi';
import './LoginScreen.css';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleLogin = () => {
    const newErrors = {};
    if (!mobile.trim()) newErrors.mobile = 'Mobile number is required';
    if (!password.trim()) newErrors.password = 'Password is required';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted');
      navigate('/home')
    }
  };
  const handleCreateAccount = () => {
    navigate('/signup')
  };

  const handleForgotPassword = () => {
    // Navigate to forgot password screen
  };


  return (
    <div className='loginSection'>
      <div className='loginBox'>
        <h3 className='heading'>Admin Login</h3>

        <TextField
          placeholder="Enter Mobile Number"
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          icon={FiPhone}
          name="mobile"
          error={errors.mobile}
        />

        <TextField
          placeholder="Enter your password"
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={showPassword ? FiEyeOff : FiEye}
          onIconClick={() => setShowPassword(!showPassword)}
          error={errors.password}
        />

        <Button text="Login" onClick={handleLogin} />
        <div className="auth-footer-text">
          <span>Don’t have an account? </span>
          <span className="link-text" onClick={handleCreateAccount}>
            Create Account.
          </span>
          <br />
          <span className="link-text" onClick={handleForgotPassword}>
            Forgot Password?
          </span>
        </div>
      </div>

    </div>
  );
};

export default LoginScreen;
