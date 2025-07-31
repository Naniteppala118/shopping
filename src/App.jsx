// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginScreen from './biofactor/pages/loginScreen/LoginScreen'
import './App.css'
import SignupScreen from './biofactor/pages/signupScreen/SignupScreen';
import HomeScreen from './biofactor/pages/homeScreen/HomeScreen'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/home/*" element={<HomeScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
