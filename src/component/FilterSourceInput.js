import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

export default class FilterSourceInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.options };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.handleInput('filter_source', event.target.value);
  }

  getOptions() {
    let items = [];
    for (let i = 0; i < this.props.options.length; i++) {
      let value = this.props.options[i];
      items.push(
        <MenuItem key={value} value={value}>
          <Checkbox checked={this.state.value.indexOf(value) > -1} />
          <ListItemText primary={value} />
        </MenuItem>
      );
    }
    return items;
  }

  render() {
    return (
      <FormControl fullWidth>
        <InputLabel id="filter-source-label">Lore source</InputLabel>
        <Select
          labelId="filter-source-label"
          id="filter-source"
          multiple
          value={this.state.value}
          label="Lore source"
          onChange={this.handleChange}
          input={<OutlinedInput label="Lore source" />}
          renderValue={(selected) => selected.join(', ')}
        >
          {this.getOptions()}
        </Select>
      </FormControl>
    );
  }
}
