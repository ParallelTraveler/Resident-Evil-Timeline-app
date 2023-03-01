import * as React from 'react';
import FilterContainer from '../component/FilterContainer';
import ResultContainer from '../component/ResultContainer';
import './Home.css';
import data from './../data/RE_Data.json';
import config from './../data/RE_Config.json';

export default class HomeRE extends React.Component {
  resultsTrigger = false;

  constructor(props) {
    super(props);
    this.state = { filters: {} };
  }

  handleFilterSelection = (values) => {
    this.setState({
      filters: values
    });
    this.resultsTrigger = true;
  }

  render() {
    return (
      <>
        <p>
          <img src="/Resident-Evil-Timeline-app/images/title.png" alt="Resident Evil Timeline" className="banner" />
        </p>
        <main>
          <FilterContainer data={data} config={config} handleFilterSelection={this.handleFilterSelection} />
          <ResultContainer data={data} config={config} show={this.resultsTrigger} filters={this.state.filters} />
        </main>
      </>
    );
  }
}
