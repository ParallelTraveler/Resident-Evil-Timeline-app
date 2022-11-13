import React from 'react';
import { Container, Grid, Link, Typography } from '@mui/material';
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
        <Grid item xs={12} md={2}></Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" component="h1">Further reading</Typography>

            <Typography sx={{ mt: 4 }} variant="h5alt" component="h2">Okay but what should I play and experience?</Typography>
            <p>We strongly recommend at the very least experiencing the main canon's "Major video games", and "Movies &amp; TV series" in release order. If you do not have access to the original Resident Evils 1 through 4, it is perfectly fine to replace them with the remakes. If you do go down that route, play Resident Evil 0 after the remake of the first Resident EvilI. To go a bit beyond, also check out the main canon minor video games you can easily access, mangas, and supplement material. Beyond that, just check out what interests you!</p>

            <Typography sx={{ mt: 4 }} variant="h5alt" component="h2">Is there anything missing?</Typography>
            <p>Yes actually! There are more sources of lore in material such as guidebooks that aren't covered here. They're not presented in an in-universe formatand are scattered across notes, descriptions, and such. There are also pieces of lost Resident Evil media such as other browser games. And there's still more that constitutes as part of the franchise; crossover promotions, art books, other live-attractions. And beyond on products, trailers, websites, game manuals, anniversaries, competitions, trade shows, and interviews are also part of the meta of what the franchise is. The franchise is absolutely massive, and there's always something new on the way.</p>

            <Typography sx={{ mt: 4 }} variant="h5alt" component="h2">Message from ParallelTraveler</Typography>
            <p>Hello! Thank you for checking out our project. I love making resources and this one is especially dedicated to the greater fandom. The inspiration to make this actually does come from observing fans asking "what is the timeline?" as one of the most common questions posted in social media groups and on forums. Not only did I want a way to more efficiently answer that question, but I also wanted to demonstrate the franchise has more than just games. I hope this tool can help others learn and become interested in the even deeper aspect of the franchise. And at least just have fun playing with the app.</p>

            <Typography sx={{ mt: 4 }} variant="h5alt" component="h2">See also</Typography>
            <ul>
              <li><Link href="#" target="_blank">[placeholder]</Link> - ParallelTraveler's personal blog</li>
              <li><Link href="https://www.evilresource.com/" target="_blank">www.evilresource.com</Link> - Evil Resource's website</li>
              <li><Link href="https://residentevil.fandom.com/wiki/Timeline_by_media" target="_blank">residentevil.fandom.com/wiki/Timeline_by_media</Link> - static timeline on Resident Evil Wiki</li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Extra;