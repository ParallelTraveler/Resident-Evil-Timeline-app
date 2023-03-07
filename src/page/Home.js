import * as React from 'react';
import Container from '@mui/material/Container';
import Navbar from "../Navbar";
import HomeRE from './HomeRE';
import HomeDMC from './HomeDMC';
import './Home.css';

export default class Home extends React.Component {
  render() {
    const isDMC = window.sessionStorage.getItem('db') === 'DMC';
    return (
      <>
        <Navbar />
        <Container maxWidth="lg">
          {isDMC && <HomeDMC />}
          {!isDMC && <HomeRE />}
        </Container>
      </>
    );
  }
}
