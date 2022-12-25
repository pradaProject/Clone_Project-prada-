import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "../Pages/Home";
import SignUp from "../Pages/Signup";
import Login from "../Pages/Login";
import Mypage from "../Pages/Mypage";
import Main from "../Pages/Main";
import Detail from "../Pages/Detail";


import Footer from "../Components/Footer"

const Router = () => {
  console.log("dev");
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
