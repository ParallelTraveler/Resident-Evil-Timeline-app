import React from 'react';
import { Container, Grid, Link, Typography } from '@mui/material';
import Navbar from "../Navbar";

function FurtherReading() {
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
            <Typography variant="h4" component="h1">Further reading</Typography>

            <Typography sx={{ mt: 4 }} variant="h5alt" component="h2">Okay but what should I play and experience?</Typography>
            <p>We recommend following the main canon's "Major video games", and "Movies & TV series" in release order. If you do not have access to the original Resident Evil 1, 2, 3, & 4, it is fine to replace them with the remakes. If you do go down that route, consider playing Resident Evil 0 after the remake of the first Resident Evil. To go a step further, also check out the main canon's minor video games, mangas, and supplement material you can easily access. Beyond that, just look up what interests you!</p>

            <Typography sx={{ mt: 4 }} variant="h5alt" component="h2">Is there anything missing?</Typography>
            <p>Yes actually! There's so much more material that makes up the IP. As far as commercial products go, there's also crossover promotions, art books, and other live-attractions. And beyond that, trailers, websites, game manuals, anniversaries, competitions, trade shows, and interviews are also part of the franchise. Even if they were listed, there are also pieces of lost media such as other browser games. There are also more sources of lore in material such as guidebooks scattered across notes, descriptions, Q&A comments etc. that can't be easily pointed to. The franchise is absolutely massive, and there's always something new on the way!</p>

            <Typography sx={{ mt: 4 }} variant="h5alt" component="h2">Message from ParallelTraveler</Typography>
            <p>Hello! Thank you for checking out our project. I adore creating Resident Evil resources and one was especially dedicated to the greater fandom. The inspiration does actually come from observing "what is the timeline?" as the most common question posted on social media. Not only did I want a way to more efficiently answer that question, but I also wanted to demonstrate the franchise has more than just games. I hope this tool can help others learn and become interested in the even deeper aspect of Resident Evil, and have fun playing with the app!</p>

            <Typography sx={{ mt: 4 }} variant="h5alt" component="h2">See also</Typography>
            <ul>
              <li><Link href="https://bioredqueeneffect.wordpress.com/" target="_blank">bioredqueeneffect.wordpress.com</Link> - ParallelTraveler's personal blog</li>
              <li><Link href="https://www.evilresource.com/" target="_blank">www.evilresource.com</Link> - Evil Resource's website</li>
              <li><Link href="https://residentevil.fandom.com/wiki/Timeline_by_media" target="_blank">residentevil.fandom.com/wiki/Timeline_by_media</Link> - static timeline on Resident Evil Wiki</li>
              <li><Link href="https://residentevil.fandom.com/wiki/Continuities" target="_blank">residentevil.fandom.com/wiki/Continuities</Link> - list of the different continuities on Resident Evil Wiki to help users understand the different Canons</li>
              <li><Link href="https://www.projectumbrella.net/chronological-timeline-of-materials.html" target="_blank">www.projectumbrella.net/chronological-timeline-of-materials.html</Link> - Chronological timeline of Materials on Project Umbrella</li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default FurtherReading;