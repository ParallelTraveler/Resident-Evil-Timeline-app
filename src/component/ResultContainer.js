import * as React from 'react';
import ResultItem from './ResultItem';

export default class ResultContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filters: {} };
  }

  getResults() {
    console.log('Filters:', this.props.filters);
    let filters = this.props.filters;
    let results = this.props.data;

    // Quit if we are not instructed to show results.
    if (!this.props.show) {
      return [];
    }

    // Set defaults.
    if (!filters.hasOwnProperty('filter_entry_type')) {
      filters.filter_entry_type = 'Simple';
    }
    if (!filters.hasOwnProperty('sort_results')) {
      filters.sort_results = 'In-universe date';
    }
    if (!filters.hasOwnProperty('show_availability')) {
      filters.show_availability = true;
    }
    if (!filters.hasOwnProperty('show_release_date')) {
      filters.show_release_date = true;
    }
    console.log('Adjusted filters:', this.props.filters);

    // Attach the filter data.
    for (let index in results) {
      results[index]['filters'] = filters;
    }

    // Filter source.
    if (filters.filter_source) {
      results = results.filter(item => {
        return filters.filter_source.includes(item.source);
      });
    }

    // Filter entry type.
    results = results.filter(item => {
      return item.entry_type === '' || filters.filter_entry_type.includes(item.entry_type);
    });

    // Filter canon.
    if (filters.filter_canon) {
      results = results.filter(item => {
        return filters.filter_canon.includes(item.canon);
      });
    }

    // Sort.
    switch (filters.sort_results) {
      case 'In-universe date':
        results = results.sort(function (a, b) {
          return new Date(a.reference_date) - new Date(b.reference_date);
        });
        console.log('Sorting un-universe');
        break;

      default:
        results = results.sort(function (a, b) {
          return new Date(a.release_date) - new Date(b.release_date);
        });
        console.log('Sorting release date');
    }

    // Return the final results.
    return results;
  }

  render() {
    let results = this.getResults();
    console.log('Results:', results);
    return (
      <>
        {results.map(function (item, i) {
          return <div className={'row'} key={i}>
            {<ResultItem key={i} item={item} />}
          </div>;
        })}
      </>
    );
  }
}
