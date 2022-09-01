import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

export default class FilterEntryTypeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.options[0] };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.handleInput('filter_entry_type', event.target.value);
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
        <InputLabel id="entry-type-label">Simple/Sectioned</InputLabel>
        <Select
          labelId="entry-type-label"
          id="entry-type"
          value={this.state.value}
          label="Simple/Sectioned"
          onChange={this.handleChange}
          input={<OutlinedInput label="Simple/Sectioned" />}
        >
          {this.getOptions()}
        </Select>
      </FormControl>
    );
  }
}
