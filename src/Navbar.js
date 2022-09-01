import React from "react";
import { NavLink } from "react-router-dom";
import { Container, AppBar, List, ListItem } from '@mui/material';
import './NavBar.css';

function Navbar() {
  return (
    <AppBar position="static">
      <Container sx={{ py: 1 }} maxWidth="lg">
        <List className="nav">
          <ListItem disablePadding>
            <NavLink to="/home">
              Home
            </NavLink>
          </ListItem>
          <ListItem disablePadding>
            <NavLink to="/about">
              About
            </NavLink>
          </ListItem>
        </List>
      </Container>
    </AppBar>
  );
}

export default Navbar;