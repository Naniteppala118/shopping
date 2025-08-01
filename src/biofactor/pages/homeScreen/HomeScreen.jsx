import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import AppBarComponent from "../../components/AppBarComponent";
import SideBarComponent from "../../components/sideBarComponent/SideBarComponent";
import DashboardScreen from "../dashBoardScreen/Dashboard";
import MasterScreen from "../masterScreen/MasterScreen";
import LoginScreen from "../loginScreen/LoginScreen";
import "./HomeScreen.css";
import SignupScreen from "../signupScreen/SignupScreen";

export default function HomeScreen() {
    const navigate = useNavigate();
    const [sideBarOpen, setSideBarOpen] = useState(true); 
    const handlePageChange = (page) => {
        if (page === "Dashboard") {
            navigate("/home/dashboard");
        } else if (page === "Employee") {
            navigate("/home/master");
        } else {
            navigate("/home");
        }
    }

     const handleSidebar = () => {
        setSideBarOpen(!sideBarOpen);
    };



     return (
        <div className="app-container">
            <AppBarComponent onMenuClick={handleSidebar} />
            <div className="main-content">
               {sideBarOpen && <SideBarComponent onSelect={handlePageChange} />} 
                <div className="page-content">
                    <Routes>
                        <Route index element={<DashboardScreen />} />
                        <Route path="dashboard" element={<DashboardScreen />} />
                        <Route path="master" element={<MasterScreen />} />
                        <Route path="signup" element={<SignupScreen />} />
                    </Routes>
                    
                </div>
            </div>
        </div>
    );
}
