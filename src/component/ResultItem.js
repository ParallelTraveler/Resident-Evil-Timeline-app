import * as React from 'react';
import { format } from 'date-fns'
import { Typography, Card } from '@mui/material';

export default class ResultItem extends React.Component {
  render() {
    const item = this.props.item;
    console.log('Item', item);

    // Title
    let title = item.title;
    if (item.scenario) {
      title += ' - ' + item.scenario;
    }

    // Information output.
    let information = item.display_date;
    if (item.event) {
      information += ' | ' + item.event;
    }
    if (item.canon) {
      information += ' | Canon: ' + item.canon;
    }

    // Availability output.
    let availability;
    if (item.filters.show_availability) {
      availability = <p>{item.availability}</p>
    }

    // Release date output.
    let releaseDate;
    if (item.filters.show_release_date) {
      let date = format(new Date(item.release_date), 'MMM d, yyyy');
      releaseDate = <Typography variant="subtitle1" component="small">({date})</Typography>
    }

    return (
      <>
        <Card sx={{ my: 2, px: 2 }}>
          <Typography sx={{ mt: 2 }} variant="h5" component="h2">
            {title} {releaseDate}
          </Typography>
          <p>{information}</p>
          {availability}
        </Card>
      </>
    );
  }
}
