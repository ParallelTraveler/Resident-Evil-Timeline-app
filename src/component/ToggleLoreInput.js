import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default class ToggleLoreInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.checked };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.checked });
    this.props.handleInput('show_lore', event.target.checked);
  }

  render() {
    return (
      <FormControl fullWidth>
        <FormControlLabel
          control={
            <Switch checked={this.state.value} onChange={this.handleChange} name="show-lore" />
          }
          label="Show lore"
        />
      </FormControl>
    );
  }
}
