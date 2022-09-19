import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Navbar from "../Navbar";

function Extra() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <p>
          <img src="/Resident-Evil-Timeline-app/images/title.png" alt="Resident Evil Timeline" className="banner" />
        </p>
        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            <Typography variant="h4" component="h1">Further reading</Typography>

            <Typography sx={{ mt: 4 }} variant="h5alt" component="h2">Notes about data</Typography>
            <p>The earliest release date is used, may be Japan or international</p>
            <p>Products only available in Japan retain their Japanese “BIOHAZARD” name as there is no official “Resident Evil” version of that.</p>
            <p>The “Canon” a product belongs to is usually named after the writer or group most associated with having produced that continuity.</p>
            <p>The retelling scenarios in the Chronicles games are not listed, only the original scenarios.</p>

            <Typography sx={{ mt: 4 }} variant="h5alt" component="h2">Suggestion for what to experience and what order?</Typography>
            <p>You may be using this to help decide what order to play the games in, only to find out there’s also movies, and much much more to the point you don’t know what to check.</p>

            <Typography sx={{ mt: 4 }} variant="h5alt" component="h2">Message from ParallelTraveler</Typography>
            <p>Hello! Thank you for checking out this project.</p>
            <p>I love making resources for Resident Evil.</p>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Extra;