// import { useState } from "react";
import React from "react";
import ResetPassword from "./pages/Reset.jsx";
import SignIn from './pages/SignIn.jsx';
import Layout from "./Layouts/DefaultLayout.jsx";
import NewPassword from "./pages/NewPassword.jsx";
import CheckMail from "./pages/CheckMail.jsx";
import ResetSuccess from "./pages/ResetSuccess.jsx";
import OnBoarding1 from "./pages/OnBoarding1.jsx";
import OnBoarding2 from "./pages/OnBoarding2.jsx";
import OnBoarding3 from "./pages/OnBoarding3.jsx";
import OnBoarding4 from "./pages/OnBoarding4.jsx";
import OnBoarding5 from "./pages/OnBoarding5.jsx";
import OnBoarding6 from "./pages/OnBoarding6.jsx";
import OnBoarding7 from "./pages/OnBoarding7.jsx";
import OnBoarding8 from "./pages/OnBoarding8.jsx";
import OnBoarding9 from "./pages/OnBoarding9.jsx";
import OnBoarding10 from "./pages/OnBoarding10.jsx";
import OnBoarding11 from "./pages/OnBoarding11.jsx";
import OnBoarding12 from "./pages/OnBoarding12.jsx";
import OnBoarding13 from "./pages/OnBoarding13.jsx";
import Error from "./pages/Error.jsx";

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
        <Route path="/onboarding2" element={<OnBoarding2 />} />
        <Route path="/onboarding3" element={<OnBoarding3 />} />
        <Route path="/onboarding4" element={<OnBoarding4 />} />
        <Route path="/onboarding5" element={<OnBoarding5 />} />
        <Route path="/onboarding6" element={<OnBoarding6 />} />
        <Route path="/onboarding7" element={<OnBoarding7 />} />
        <Route path="/onboarding8" element={<OnBoarding8 />} />
        <Route path="/onboarding9" element={<OnBoarding9 />} />
        <Route path="/onboarding10" element={<OnBoarding10 />} />
        <Route path="/onboarding11" element={<OnBoarding11 />} />
        <Route path="/onboarding12" element={<OnBoarding12 />} />
        <Route path="/onboarding13" element={<OnBoarding13 />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </div>
  );
}

export default App;
