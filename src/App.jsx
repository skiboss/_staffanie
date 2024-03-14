// import { useState } from "react";
import React from "react";
import ResetPassword from "./pages/Reset.jsx";
import SignIn from './pages/SignIn.jsx';
import Layout from "./Layouts/DefaultLayout.jsx";
import NewPassword from "./pages/NewPassword.jsx";
import CheckMail from "./pages/CheckMail.jsx";
import ResetSuccess from "./pages/ResetSuccess.jsx";
import OnBoarding1 from "./pages/OnBoarding1.jsx";

import "./App.css";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
  <div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SignIn />} />
        <Route path="/newpassword" element={<NewPassword />}/>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/checkmail" element={<CheckMail />} />
        <Route path="/successful" element={<ResetSuccess />} />
        <Route path="/onboarding1" element={<OnBoarding1 />} />
      </Route>
    </Routes>
  </div>
  );
}

export default App;
