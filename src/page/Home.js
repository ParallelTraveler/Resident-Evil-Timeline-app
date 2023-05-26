import * as React from 'react';
import Container from '@mui/material/Container';
import Banner from '../component/Banner';
import Navbar from "../Navbar";
import HomeRE from './HomeRE';
import HomeDMC from './HomeDMC';

export default class Home extends React.Component {
  render() {
    const db = window.sessionStorage.getItem('db');
    const isDMC = db && db.indexOf('DMC') === 0;
    return (
      <>
        <Navbar />
        <Banner />
        <Container maxWidth="lg">
          {isDMC && <HomeDMC />}
          {!isDMC && <HomeRE />}
        </Container>
      </>
    );
  }
}
