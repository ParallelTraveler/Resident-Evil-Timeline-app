import React from "react";
import { NavLink } from "react-router-dom";
import { Container, AppBar, List, ListItem, Stack } from '@mui/material';
import './NavBar.css';
import {
  TwitterIcon,
  TwitterShareButton,
  FacebookIcon,
  FacebookShareButton,
  RedditIcon,
  RedditShareButton
} from "react-share";

function Navbar() {
  return (
    <AppBar position="static">
      <Container sx={{ py: 1 }} maxWidth="lg">
        <div className="nav-wrapper">
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
            <ListItem disablePadding>
              <NavLink to="/further-reading">
                Further&nbsp;reading
              </NavLink>
            </ListItem>
            <ListItem disablePadding>
              <NavLink to="/extra">
                Extra
              </NavLink>
            </ListItem>
          </List>
          <Stack className="nav-share" direction="row" spacing={2} sx={{ pt: 1 }}>
            <div>
              <TwitterShareButton url={window.location}>
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>
            </div>
            <div>
              <FacebookShareButton url={window.location}>
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>
            </div>
            <div>
              <RedditShareButton url={window.location}>
                <RedditIcon size={32} round={true} />
              </RedditShareButton>
            </div>
          </Stack>
        </div>
      </Container>
    </AppBar>
  );
}

export default Navbar;