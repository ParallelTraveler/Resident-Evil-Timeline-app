import * as React from 'react';
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
      description = <div className="entry-desc">{item.description}</div>
    }

    // Lore.
    let info1 = [];
    if (item.filters.show_lore) {
      info1.push(<li key="reference_date">{item.reference_display_date}</li>);
      if (item.event) {
        info1.push(<li key="event">{item.event}</li>);
      }
      if (item.sub_canon) {
        info1.push(<li key="canon">Canon: {item.sub_canon}</li>);
      }
    }

    // Media and availability.
    let info2 = [];
    if (item.filters.show_availability) {
      if (item.sub_source) {
        info2.push(<li key="media">Media source: {item.sub_source}</li>);
      }
      if (item.availability_link) {
        info2.push(<li key="availability">Accessibility: <Link href={item.availability_link} target="_blank">{item.availability}</Link></li>);
      } else {
        info2.push(<li key="availability">Accessibility: {item.availability}</li>);
      }
    }

    // Release date.
    let releaseDate;
    let releaseRegion;
    if (item.filters.show_release_date) {
      releaseDate = <Chip sx={{ mr: 1 }} size="small" label={item.release_display_date} />
      if (item.release_region) {
        releaseRegion = <Chip sx={{ mr: 1 }} size="small" variant="outlined" label={item.release_region} />
      }
    }

    // Image
    let image;
    if (item.image && item.filters.show_picture) {
      image = <span className="entry-image"><img src={item.image} width="200" alt="" /></span>
    }

    return (
      <>
        <Card sx={{ my: 2, p: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={10}>
              <Typography sx={{ mt: 0 }} component="h2">
                <Typography sx={{ mr: 2 }} variant="h5" component="span" className="entry-title">
                  {title}
                </Typography>
                {releaseDate}
                {releaseRegion}
              </Typography>
              {description}
              {this.renderList(info1)}
              {this.renderList(info2)}
            </Grid>
            <Grid item xs={12} md={2} sx={{ my: 2 }}>
              {image}
            </Grid>
          </Grid>
        </Card>
      </>
    );
  }

  renderList(list) {
    if (list.length === 0) {
      return [];
    }
    return <ul className='entry-info-list'>{list}</ul>;
  }
}
