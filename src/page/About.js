import React from 'react';
import { Container, Grid, Card, Link, Typography } from '@mui/material';
import Banner from '../component/Banner';
import Navbar from "../Navbar";
import './About.css';

function About() {
  return (
    <>
      <Navbar />
      <Banner />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={2}></Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" component="h1">About</Typography>
            <p>Welcome to The Resident Evil Timeline App. Have you ever asked or seen the following;</p>
            <Card sx={{ my: 2, px: 2 }} variant="outlined">
              <blockquote>
                <p>"Hi I'm new to Resident Evil, what is the timeline of the series?"</p>
              </blockquote>
            </Card>
            <p>This is possibly the most common question on forums and unfortunately has no straightforward answer. Since the franchise contains so much media, thorough lists often contain much more data than a single person is likely looking for, and paradoxically any restricted list will fail to cover all possible needs. The <strong>Resident Evil Timeline App</strong> aims to be an all-encompassing tool that resolves the issue static timelines have. This app is customizable and will satisfy whichever criteria one may be searching for. It has the functionality to;</p>
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
              <li>Video games are split between "Major" and "Minor" based loosely on if they follow the  core gameplay of the current numbered title, have been ported past their launch generation, and relative size, budget, &amp; marketing. This is not a denomination of "main" and "side" games.</li>
              <li>The "Canon" a product belongs to is usually named after the writer or group most associated with having produced that continuity. For ease of use, some canons are grouped together. The "Main branches" of canons are products made with the main canon in mind but aren't part of the main canon themselves. "Pocket" canons are wholly unique to themselves, not based on the main canon and have no other media in their canon to make up a continuity. Otherwise canons are not officially defined.</li>
              <li>"Simple" sorting will display each product as one entry and dated in-universe where a majority of its contents take place. "Sectioned" will break up products into separate entries if it has sections set during different time periods.</li>
              <li>The earliest release date is used. "WW" stands for "World Wide".</li>
              <li>Products only available in Japan retain their Japanese "BIOHAZARD" name as there are no official "Resident Evil" versions of them.</li>
              <li>The retelling scenarios in the Chronicles games are not listed, only the original scenarios.</li>
            </ul>

            <Typography sx={{ mt: 4 }} variant="h5alt" component="h2">Version history</Typography>
            <p>Currently in alpha.</p>

            <Typography sx={{ mt: 4 }} variant="h5alt" component="h2">Credits</Typography>
            <p>Our team consists of dedicated fandom benefactors who have devoted countless hours to creating online resources for accessing and understanding the Resident Evil franchise. We hail from different communities and have essentially joined forces for this venture. We hope the greater fandom appreciates this tool, reach out to let us know if you found it useful! Interested in helping to further develop and add features? Contact us and ask!</p>
            <Card sx={{ my: 2, px: 2 }}>
              <Typography sx={{ mt: 2 }} variant="h6" component="h3">ParallelTraveler (Project director)</Typography>
              <p>Resident Evil wiki admin. Has been archiving information and creating resources for over a decade. Also a bartender that makes Resident Evil themed drinks.</p>
              <p>Twitter: <Link href="https://twitter.com/bioranger_PT" target="_blank">@bioranger_PT</Link></p>
              <p>Personal blog: <Link href="https://bioredqueeneffect.blogspot.com" target="_blank">bioredqueeneffect.blogspot.com</Link></p>
            </Card>
            <Card sx={{ my: 2, px: 2 }}>
              <Typography sx={{ mt: 2 }} variant="h6" component="h3">EvilResource (Main developer)</Typography>
              <p>Owner of evilresource.com. Has been documenting data from the Resident Evil games since 1996. Web development is both his day job and his hobby.</p>
              <p>Twitter: <Link href="https://twitter.com/EvilResource" target="_blank">@EvilResource</Link></p>
              <p>Website: <Link href="https://www.evilresource.com/" target="_blank">www.evilresource.com</Link></p>
            </Card>
            <Card sx={{ my: 2, px: 2 }}>
              <Typography sx={{ mt: 2 }} variant="h6" component="h3">MassDistraction (General assistance)</Typography>
              <p>Resident Evil Reddit (r/residentevil) contributor that has made other timeline documents. Collects and archives Resident Evil media.</p>
              <p>Linktree: <Link href="https://linktr.ee/massdistraction" target="_blank">linktr.ee/massdistraction</Link></p>
            </Card>
            <Card sx={{ my: 2, px: 2 }}>
              <Typography sx={{ mt: 2 }} variant="h6" component="h3">dnkakusei, Downvolt, 𝗚𝗹𝗶𝘁𝗰𝗵𝗲𝗱𝗦𝗾𝘂𝗶𝗿𝘁𝗹𝗲𒉭#2001, Skept1c#6272 (ARG division)</Typography>
              <p>Members of Resident Evil Reddit Discord that elected to help execute the ARG campaign that lead to the public announcement of this app.</p>
            </Card>
            <Card sx={{ my: 2, px: 2 }}>
              <Typography sx={{ mt: 2, mb: 2 }} variant="h6" component="h3">Cakestina (Graphic designer)</Typography>
            </Card>
            <Card sx={{ my: 2, px: 2 }} variant="outlined">
              <Typography sx={{ mt: 2 }} variant="h6" component="h3">Special thanks</Typography>
              <p>Resident Evil Wiki, Project Umbrella, Roronoa Wesker, Crimson Head Elder, Resident Evil Live, Blue Horror Gaming, Comfort Food Comics, @K_Syuuka, @_Gosetsu - For sharing information and for hosting content this app links to.</p>
              <p>(names) - For help promoting the app on social media.</p>
              <p>Inconceivable - Helping with initial conceptualization, hope you are doing well.</p>
            </Card>

            <Typography sx={{ mt: 4 }} variant="h5alt" component="h2">Disclaimer</Typography>
            <p>This non-commercial product is not affiliated with or endorsed by Resident Evil or its creators. The content provided is for entertainment and educational purposes only. We make no guarantees regarding accuracy or reliability.</p>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default About;