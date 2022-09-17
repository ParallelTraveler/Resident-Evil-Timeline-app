import * as React from 'react';
import { format } from 'date-fns'
import { Typography, Grid, Card, Chip, Link } from '@mui/material';
import './ResultItem.css';

export default class ResultItem extends React.Component {
  render() {
    const item = this.props.item;

    // Title and description.
    let title = item.title;
    let description;
    if (item.scenario) {
      title += ' - ' + item.scenario;
    }
    if (item.link) {
      title = <Link href={item.link} target="_blank">{title}</Link>
    }
    if (item.description && item.filters.show_description) {
      description = <p><em>{item.description}</em></p>
    }

    // Information.
    let information;
    if (item.filters.show_lore) {
      information = item.display_date;
      if (item.event) {
        information += ' | ' + item.event;
      }
      if (item.sub_source) {
        information += ' | Media source: ' + item.sub_source;
      }
      if (item.sub_canon) {
        information += ' | Canon: ' + item.sub_canon;
      }
    }

    // Availability.
    let availability;
    if (item.filters.show_availability) {
      if (item.availability_link) {
        availability = <p><Link href={item.availability_link} target="_blank">{item.availability}</Link></p>
      } else {
        availability = <p>{item.availability}</p>
      }
    }

    // Release date.
    let releaseDate;
    let releaseRegion;
    if (item.filters.show_release_date) {
      let date = format(new Date(item.release_date), 'MMM d, yyyy');
      releaseDate = <Chip sx={{ mr: 1 }} label={date} />
      if (item.release_region) {
        releaseRegion = <Chip sx={{ mr: 1 }} variant="outlined" label={item.release_region} />
      }
    }

    // Image
    let image;
    if (item.image && item.filters.show_picture) {
      image = <span className="entry-image"><img src={item.image} width="200" alt="" /></span>
    }

    return (
      <>
        <Card sx={{ my: 2, px: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={10}>
              <Typography sx={{ mt: 2 }} component="h2">
                <Typography sx={{ mr: 2 }} variant="h5" component="span" className="entry-title">
                  {title}
                </Typography>
                {releaseDate}
                {releaseRegion}
              </Typography>
              {description}
              <p>{information}</p>
              {availability}
            </Grid>
            <Grid item xs={12} md={2} sx={{ my: 2 }}>
              {image}
            </Grid>
          </Grid>
        </Card>
      </>
    );
  }
}
