import * as React from 'react';
import './Banner.css';

export default class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isDMC: this.getIsDMC() };
    window.addEventListener('storage', () => {
      this.setState({ isDMC: this.getIsDMC() });
    })
  }

  getIsDMC() {
    const db = window.sessionStorage.getItem('db');
    const isDMC = db && db.indexOf('DMC') === 0;
    return isDMC;
  }

  render() {
    return (
      <div className="banner-wrapper">
        {this.state.isDMC && 
          <img src="/Resident-Evil-Timeline-app/images/title-dmc.png" alt="Devil May Cry Timeline App Logo" title="Devil May Cry Timeline App" className="banner" />
        }
        {!this.state.isDMC && 
          <img src="/Resident-Evil-Timeline-app/images/title.png" alt="Resident Evil Timeline App Logo" title="Resident Evil Timeline App" className="banner" />
        }
      </div>
    );
  }
}