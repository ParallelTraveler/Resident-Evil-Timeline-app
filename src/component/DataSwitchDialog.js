import * as React from 'react';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';

export default class Home extends React.Component {
  modes = {
    'RE': 'Survival Horror',
    'DMC': 'Stylish Hard Action',
  };

  constructor(props) {
    super(props);
    let current;
    if (this.modes[this.getGlobalSetting()]) {
      current = this.modes[this.getGlobalSetting()];
    } else {
      current = Object.values(this.modes)[0];
    }
    this.state = {
      current: current,
      open: false,
      value: '',
      error: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({
      open: false,
      error: '',
    });
  }

  handleInput(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit() {
    const value = this.state.value;
    const keys = Object.keys(this.modes);
    for (let index in keys) {
      let key = keys[index];
      if (value === this.modes[key]) {
        this.setGlobalSetting(key);
        this.setState({ current: value });
        this.handleClose();
        return;
      }
    }
    this.setState({ error: 'Sorry, that is not correct.' });
  }

  setGlobalSetting(value) {
    window.sessionStorage.setItem('db', value);
  }

  getGlobalSetting() {
    return window.sessionStorage.getItem('db');
  }

  render() {
    return (
      <div>
        <Stack direction="row" spacing={1}>
          <Chip label={this.state.current} variant="outlined" />
          <Chip label="Change" icon={<EditIcon />} onClick={this.handleClickOpen} />
        </Stack>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>???</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter the secret code.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="secret"
              label="Secret code"
              type="text"
              fullWidth
              variant="standard"
              onChange={this.handleInput}
              helperText={this.state.error}
              error={this.state.error !== ''}
              autoComplete="off"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Cancel</Button>
            <Button onClick={this.handleSubmit}>Execute</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
