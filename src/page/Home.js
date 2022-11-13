import * as React from 'react';
import Container from '@mui/material/Container';
import Navbar from "../Navbar";
import FilterContainer from '../component/FilterContainer';
import ResultContainer from '../component/ResultContainer';
import './Home.css';
import timelineData from './../data/db.json';

export default class Home extends React.Component {
  resultsTrigger = false;
  defaultFilters = {
    'filter_source': ['Major video game'],
    'filter_canon': ['Main'],
  };

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
        <Navbar />
        <Container maxWidth="lg">
          <p>
            <img src="/Resident-Evil-Timeline-app/images/title.png" alt="Resident Evil Timeline" className="banner" />
          </p>
          <main>
            <FilterContainer data={timelineData} defaultFilters={this.defaultFilters} handleFilterSelection={this.handleFilterSelection} />
            <ResultContainer data={timelineData} defaultFilters={this.defaultFilters} show={this.resultsTrigger} filters={this.state.filters} />
          </main>
        </Container>
      </>
    );
  }
}
