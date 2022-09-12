import React from 'react';
import { Container, Grid, Card, Link, Typography } from '@mui/material';
import Navbar from "../Navbar";

function About() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <p>
          <img src="/Resident-Evil-Timeline-app/images/title.png" alt="Resident Evil Timeline" className="banner" />
        </p>
        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            <Typography variant="h4" component="h1">About</Typography>
            <p>The Resident Evil Timeline app aims to be an all-encompassing timeline tool that resolves the age old issues static documents have; because the franchise contains so much media, hyper detailed pieces contain way more data a single person would be meaning to look for and paradoxically, any restricted piece fails to cover all possible needs.</p>
            <p>This app is customizable and can satisfy whatever anyone is searching for. It has the functionality to;</p>
            <ul>
              <li>sort by release date or by in-universe date</li>
              <li>filter by the media type i.e. games, movies, both, everything etc.</li>
              <li>filter by canon status i.e. main canon, anderson, no-plot</li>
              <li>show entries like Resident Evil 3 as single or multiple entries to accurately represent the multiple instances it takes place in time</li>
              <li>toggle accessibility notes; for those wanting to know what's feasible for them to experience and access</li>
            </ul>
            <p>Create the exact timeline you've been looking for!</p>

            <Typography sx={{ mt: 4 }} variant="h5alt" component="h2">Version history</Typography>
            <p>Currently in alpha.</p>
            <p>Interested in helping to further develop? Contact the project lead on twitter, see credits.</p>

            <Typography sx={{ mt: 4 }} variant="h5alt" component="h2">Credits</Typography>
            <p>Our team consists of dedicated fandom benefactors who have devoted countless hours to creating online resources for accessing and understanding the Resident Evil franchise. We hail from different spheres of the fandom and have essentially joined forces for this venture. We hope the greater fandom appreciates this tool!</p>
            <Card sx={{ my: 2, px: 2 }} variant="outlined">
              <Typography sx={{ mt: 2 }} variant="h6" component="h3">ParallelTraveler (Project director)</Typography>
              <p>About: Resident Evil wiki admin</p>
              <p>Twitter: <Link href="https://twitter.com/bioranger_PT" target="_blank">@bioranger_PT</Link></p>
            </Card>
            <Card sx={{ my: 2, px: 2 }} variant="outlined">
              <Typography sx={{ mt: 2 }} variant="h6" component="h3">EvilResource (Main developer)</Typography>
              <p>About: Owner of evilresource.com</p>
              <p>Twitter: <Link href="https://twitter.com/EvilResource" target="_blank">@EvilResource</Link></p>
              <p>Website: <Link href="https://www.evilresource.com/" target="_blank">www.evilresource.com</Link></p>
            </Card>
            <Card sx={{ my: 2, px: 2 }} variant="outlined">
              <Typography sx={{ mt: 2 }} variant="h6" component="h3">MassDistraction (Assistance)</Typography>
              <p>About: Resident Evil Reddit (r/residentevil) contributor, has made other timeline documents on Reddit</p>
              <p>Twitter: <Link href="https://twitter.com/massaharhautus" target="_blank">@massaharhautus</Link></p>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default About;