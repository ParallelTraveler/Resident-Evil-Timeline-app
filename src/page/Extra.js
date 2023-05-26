import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Banner from '../component/Banner';
import Navbar from "../Navbar";
import DataSwitchDialog from '../component/DataSwitchDialog';

function Extra() {
  return (
    <>
      <Navbar />
      <Banner />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={2}></Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" component="h1">Extra</Typography>

            <Typography sx={{ mt: 4 }} variant="h5alt" component="h2">Promotional art gallery</Typography>
            <p>[Placeholder text]</p>

            <Typography sx={{ mt: 4 }} variant="h5alt" component="h2">Mode</Typography>

            <DataSwitchDialog />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Extra;