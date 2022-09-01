import React from "react";
import { Outlet } from "react-router-dom";
import Container from '@mui/material/Container';
import Navbar from "../Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <p>
          <img src="/Resident-Evil-Timeline/images/title.png" alt="Resident Evil Timeline" className="banner" />
        </p>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;