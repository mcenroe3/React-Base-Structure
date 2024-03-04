import React from "react";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import CustomersList from "./CustomersList";
import NoMatchPage from "./NoMatchingPage";
import Home from "../Files/Home";
import Wish from "../Files/Wish";
import CustomerCare from "./CustomerCare";

export default function Routing() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/customers" element={<CustomersList />} />
          <Route path="/wishlist" element={<Wish />} />
          <Route path="/customercare" element={<CustomerCare />} />
          <Route path="*" element={<NoMatchPage />} />
        </Routes>
      </div>
    </Router>
  );
}
