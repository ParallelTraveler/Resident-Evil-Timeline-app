import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    if (this.state.value === 'Stylish Hard Action') {
      this.setGlobalSetting('DMC');
      this.handleClose();
      return;
    } else if (this.state.value === 'Survival Horror') {
      this.setGlobalSetting('RE');
      this.handleClose();
      return;
    }
    this.setState({ error: 'Sorry, that is not correct.' });
  }

  setGlobalSetting(value) {
    window.localStorage.setItem('db', value);
  }

  render() {
    return (
      <div>
        <Button variant="outlined" onClick={this.handleClickOpen}>
          ???
        </Button>
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
