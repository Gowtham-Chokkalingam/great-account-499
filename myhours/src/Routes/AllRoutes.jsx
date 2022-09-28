import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import HowItWorks from "../Pages/HowItWorks";
import Pricing from "../Pages/Pricing";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Support from "../Pages/Support";
import UseCases from "../Pages/UseCases";

// all the routing using the routing library should be done from here;

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/howits" element={<HowItWorks />} />
        <Route path="/price" element={<Pricing />} />
        <Route path="/singin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/support" element={<Support />} />
        <Route path="/usecases" element={<UseCases />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
