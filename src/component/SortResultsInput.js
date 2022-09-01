import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

export default class SortResultsInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.options[0] };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.handleInput('sort_results', event.target.value);
  }

  getOptions() {
    let items = [];
    for (let i = 0; i < this.props.options.length; i++) {
      let value = this.props.options[i];
      items.push(
        <MenuItem key={value} value={value}>{value}</MenuItem>
      );
    }
    return items;
  }

  render() {
    return (
      <FormControl fullWidth>
        <InputLabel id="sort-results-label">Sort by</InputLabel>
        <Select
          labelId="sort-results-label"
          id="sort-results"
          value={this.state.value}
          label="Sort by"
          onChange={this.handleChange}
          input={<OutlinedInput label="Sort by" />}
        >
          {this.getOptions()}
        </Select>
      </FormControl>
    );
  }
}
