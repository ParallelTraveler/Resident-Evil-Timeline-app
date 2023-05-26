import * as React from 'react';
import FilterContainer from '../component/FilterContainer';
import ResultContainer from '../component/ResultContainer';
import data from './../data/DMC_Data.json';
import config from './../data/DMC_Config.json';

export default class HomeDMC extends React.Component {
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
        <main>
          <FilterContainer data={data} config={config} handleFilterSelection={this.handleFilterSelection} />
          <ResultContainer data={data} config={config} show={this.resultsTrigger} filters={this.state.filters} />
        </main>
      </>
    );
  }
}
