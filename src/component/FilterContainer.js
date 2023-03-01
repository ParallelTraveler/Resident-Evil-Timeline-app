import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import FilterEntryTypeInput from './FilterEntryTypeInput';
import FilterSourceInput from './FilterSourceInput';
import FilterCanonInput from './FilterCanonInput';
import ToggleAvailabilityInput from './ToggleAvailabilityInput';
import SortResultsInput from './SortResultsInput';
import ToggleReleaseDateInput from './ToggleReleaseDateInput';
import TogglePictureInput from './TogglePictureInput';
import ToggleDescriptionInput from './ToggleDescriptionInput';
import ToggleLoreInput from './ToggleLoreInput';

export default class FilterContainer extends React.Component {
  filterValues = {};
  config = {};

  constructor(props) {
    super(props);
    this.config = this.props.config;
    this.handleFilterInput = this.handleFilterInput.bind(this);
  }

  handleFilterInput(filter, value) {
    this.filterValues[filter] = value;
  }

  handleExecute(event) {
    this.props.handleFilterSelection(this.filterValues);
  }

  onlyUnique(value, index, self) {
    return value !== '' && self.indexOf(value) === index;
  }

  render() {
    return (
      <Card sx={{ p: 2 }} variant="outlined">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <FilterSourceInput options={this.config.filter_source.options} defaultOptions={this.config.filter_source.default} handleInput={this.handleFilterInput} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FilterCanonInput options={this.config.filter_canon.options} defaultOptions={this.config.filter_canon.default} handleInput={this.handleFilterInput} />
          </Grid>
          {this.config.sort_results.enabled &&
            <Grid item xs={12} md={6}>
              <SortResultsInput options={this.config.sort_results.options} handleInput={this.handleFilterInput} />
            </Grid>
          }
          {this.config.filter_entry_type.enabled &&
            <Grid item xs={12} md={6}>
              <FilterEntryTypeInput options={this.config.filter_entry_type.options} handleInput={this.handleFilterInput} />
            </Grid>
          }

        </Grid>
        <Grid sx={{ mt: 1 }} container spacing={2} direction="row" justifyContent="center" alignItems="center">
          {this.config.show_lore.enabled &&
            <Grid item xs={12} md="auto">
              <ToggleLoreInput checked={true} handleInput={this.handleFilterInput} />
            </Grid>
          }
          <Grid item xs={12} md="auto">
            <ToggleAvailabilityInput checked={true} handleInput={this.handleFilterInput} />
          </Grid>
          <Grid item xs={12} md="auto">
            <ToggleReleaseDateInput checked={true} handleInput={this.handleFilterInput} />
          </Grid>
          <Grid item xs={12} md="auto">
            <TogglePictureInput checked={true} handleInput={this.handleFilterInput} />
          </Grid>
          <Grid item xs={12} md="auto">
            <ToggleDescriptionInput checked={true} handleInput={this.handleFilterInput} />
          </Grid>
        </Grid>
        <Grid sx={{ mt: 1 }} container spacing={2} direction="row" justifyContent="center" alignItems="center">
          <Grid item xs="auto">
            <Button variant="outlined" color="secondary" onClick={() => { this.handleExecute(); }}>Get results</Button>
          </Grid>
        </Grid>
      </Card>
    );
  }
}
