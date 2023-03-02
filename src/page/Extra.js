import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Navbar from "../Navbar";
import DataSwitchDialog from '../component/DataSwitchDialog';

function Extra() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <p>
          <img src="/Resident-Evil-Timeline-app/images/title.png" alt="Resident Evil Timeline" className="banner" />
        </p>
        <Grid container spacing={2}>
        <Grid item xs={12} md={2}></Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" component="h1">Extra</Typography>

            <Typography sx={{ mt: 4 }} variant="h5alt" component="h2">Promotional art gallery</Typography>
            <p>[Placeholder text]</p>

            <Typography sx={{ mt: 4 }} variant="h5alt" component="h2">Mode</Typography>
            <p>Current mode: Survival Horror</p>
            <DataSwitchDialog />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Extra;