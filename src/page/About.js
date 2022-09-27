import React from 'react';
import { Container, Grid, Card, Link, Typography } from '@mui/material';
import Navbar from "../Navbar";
import './About.css';

function About() {
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
            <Typography variant="h4" component="h1">About</Typography>
            <Card sx={{ my: 2, px: 2 }} variant="outlined">
              <blockquote>
                <p>"Hi I'm new to the series, what is the timeline of Resident Evil?"</p>
                <p><small><em>- The most common Resident Evil forum question</em></small></p>
              </blockquote>
            </Card>
            <p>The <strong>Resident Evil Timeline app</strong> aims to be an all-encompassing timeline tool that seeks to answer the age old question while resolving the issue static documents and answers have; because the franchise contains so much media, hyper detailed lists contain way more data a single person would be meaning to look for and paradoxically, any restricted piece fails to cover all possible needs.</p>
            <p>This app is customizable and can satisfy whatever anyone is searching for. It has the functionality to:</p>
            <ul>
              <li>select which media to include i.e. games, movies, both, everything etc.</li>
              <li>select which canons are included i.e. main, anderson, no-plot, etc.</li>
              <li>sort by release date or by in-universe date</li>
              <li>provide the option to show entries like Resident Evil 3: Nemesis as single or multiple entries to accurately represent the multiple instances it takes place in time</li>
              <li>toggle key information to show; lore info, availability, release date, a picture, and a general description</li>
              <li>provide links to Resident Evil Wiki and where to immediately access the product</li>
            </ul>
            <p>Create the exact timeline you've been looking for!</p>

            <Typography sx={{ mt: 4 }} variant="h5alt" component="h2">Data key notes</Typography>
            <ul>
              <li>Video games are split between "Major" and "Minor" based loosely on if they follow the  core gameplay of the current numbered title, have been ported past their launch generation, and relative size, budget, & marketing. This is not a denomination of "main" and "side" games.</li>
              <li>The "Canon" a product belongs to is usually named after the writer or group most associated with having produced that continuity. For ease of use, some canons are groups together. The "Main branches" of canons are products made with the main canon in mind but aren’t part of the main canon themselves.</li>
              <li>"Simple" sorting will display each product as one entry and dated in-universe where a majority of its contents take place. "Sectioned" will break up products into separate entries if it has sections set during different time periods.</li>
              <li>The earliest release date is used. "WW"" stands for "world wide".</li>
              <li>Products only available in Japan retain their Japanese "BIOHAZARD" name as there is no official "Resident Evil" version of that.</li>
            </ul>
            <p>Interested in helping to further develop and add features? Contact the project lead on twitter, see credits below.</p>

            <Typography sx={{ mt: 4 }} variant="h5alt" component="h2">Version history</Typography>
            <p>Currently in alpha.</p>

            <Typography sx={{ mt: 4 }} variant="h5alt" component="h2">Credits</Typography>
            <p>Our team consists of dedicated fandom benefactors who have devoted countless hours to creating online resources for accessing and understanding the Resident Evil franchise. We hail from different spheres of the fandom and have essentially joined forces for this venture. We hope the greater fandom appreciates this tool, reach out to let us know if you found it useful!</p>
            <Card sx={{ my: 2, px: 2 }}>
              <Typography sx={{ mt: 2 }} variant="h6" component="h3">ParallelTraveler (Project director)</Typography>
              <p>About: Resident Evil wiki admin</p>
              <p>Twitter: <Link href="https://twitter.com/bioranger_PT" target="_blank">@bioranger_PT</Link></p>
              <p>Website: <Link href="https://bioredqueeneffect.blogspot.com/" target="_blank">bioredqueeneffect.blogspot.com</Link></p>
            </Card>
            <Card sx={{ my: 2, px: 2 }}>
              <Typography sx={{ mt: 2 }} variant="h6" component="h3">EvilResource (Main developer)</Typography>
              <p>About: Owner of evilresource.com</p>
              <p>Twitter: <Link href="https://twitter.com/EvilResource" target="_blank">@EvilResource</Link></p>
              <p>Website: <Link href="https://www.evilresource.com/" target="_blank">www.evilresource.com</Link></p>
            </Card>
            <Card sx={{ my: 2, px: 2 }}>
              <Typography sx={{ mt: 2 }} variant="h6" component="h3">MassDistraction (General assistance)</Typography>
              <p>About: Resident Evil Reddit (r/residentevil) contributor, has made other timeline documents on Reddit</p>
              <p>Twitter: <Link href="https://twitter.com/massaharhautus" target="_blank">@massaharhautus</Link></p>
            </Card>
            <Card sx={{ my: 2, px: 2 }} variant="outlined">
              <Typography sx={{ mt: 2 }} variant="h6" component="h3">Shout outs</Typography>
              <p>Individuals and groups in the information sharing community for also hosting content this app links to:</p>
              <p>Resident Evil Wiki, Project Umbrella, Roronoa Wesker, Crimson Head Elder, Resident Evil Live, Blue Horror Gaming, Comfort Food Comics</p>
            </Card>
            <Card sx={{ my: 2, px: 2 }} variant="outlined">
              <Typography sx={{ mt: 2 }} variant="h6" component="h3">Special thanks</Typography>
              <p>Inconceivable - Helping with initial conceptualization, hope you are doing well.</p>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default About;