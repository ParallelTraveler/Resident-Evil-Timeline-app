import * as React from 'react';
import Container from '@mui/material/Container';
import Navbar from "../Navbar";
import HomeRE from './HomeRE';
import HomeDMC from './HomeDMC';
import './Home.css';

export default class Home extends React.Component {
  render() {
    let home;
    if (1 == 1) {
      home = <HomeDMC />
    } else {
      home = <HomeRE />
    }

    return (
      <>
        <Navbar />
        <Container maxWidth="lg">
          {home}
        </Container>
      </>
    );
  }
}
