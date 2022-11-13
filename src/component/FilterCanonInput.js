import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

export default class FilterCanonInput extends React.Component {
  isAllSelected = false;

  constructor(props) {
    super(props);
    let options = this.props.defaultOptions ? this.props.defaultOptions : this.props.options;
    this.state = { value: options };
    this.handleChange = this.handleChange.bind(this);
    this.isAllSelected = this.props.options.length > 0 && this.state.value.length === this.props.options.length;
  }

  handleChange(event) {
    let value = event.target.value;
    const selected = this.state.value;
    const options = this.props.options;
    if (value[value.length - 1] === 'all') {
      value = (selected.length === options.length ? [] : options);
    }
    this.setState({ value: value });
    this.props.handleInput('filter_canon', value);
  }

  getOptions() {
    let items = [];
    const selected = this.state.value;
    const options = this.props.options;
    this.isAllSelected = options.length > 0 && selected.length === options.length;
    items.push(
      <MenuItem
        key="all"
        value="all"
      >
        <ListItemIcon>
          <Checkbox
            checked={this.isAllSelected}
            indeterminate={
              selected.length > 0 && selected.length < options.length
            }
          />
        </ListItemIcon>
        <ListItemText
          primary="Select all"
        />
      </MenuItem>
    );
    for (let i = 0; i < options.length; i++) {
      let value = options[i];
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
        <InputLabel id="filter-canon-label">Canon</InputLabel>
        <Select
          labelId="filter-canon-label"
          id="filter-canon"
          multiple
          value={this.state.value}
          label="Canon"
          onChange={this.handleChange}
          input={<OutlinedInput label="Canon" />}
          renderValue={(selected) => selected.join(', ')}
        >
          {this.getOptions()}
        </Select>
      </FormControl>
    );
  }
}
