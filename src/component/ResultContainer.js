import * as React from 'react';
import ResultItem from './ResultItem';

export default class ResultContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filters: {} };
  }

  getResults() {
    let config = this.props.config;
    let filters = this.props.filters;
    let results = this.props.data;
    console.log('Results', results);
    // Quit if we are not instructed to show results.
    if (!this.props.show) {
      return [];
    }

    // Set defaults.
    if (!filters.hasOwnProperty('filter_source') && config.filter_source.default.length > 0) {
      filters.filter_source = config.filter_source.default;
    }
    if (!filters.hasOwnProperty('filter_canon') && config.filter_canon.default.length > 0) {
      filters.filter_canon = config.filter_canon.default;
    }
    if (!filters.hasOwnProperty('filter_entry_type') && config.filter_entry_type.default.length > 0) {
      filters.filter_entry_type = config.filter_entry_type.default[0];
    }
    if (!filters.hasOwnProperty('sort_results') && config.sort_results.default.length > 0) {
      filters.sort_results = config.sort_results.default[0];
    }
    if (!filters.hasOwnProperty('show_lore')) {
      filters.show_lore = true;
    }
    if (!filters.hasOwnProperty('show_availability')) {
      filters.show_availability = true;
    }
    if (!filters.hasOwnProperty('show_release_date')) {
      filters.show_release_date = true;
    }
    if (!filters.hasOwnProperty('show_picture')) {
      filters.show_picture = true;
    }
    if (!filters.hasOwnProperty('show_description')) {
      filters.show_description = true;
    }
    console.log('Filters', filters);
    // Attach the filter data.
    for (let index in results) {
      results[index]['filters'] = filters;
    }
    console.log('Results 1', results);

    // Filter source.
    if (filters.filter_source) {
      results = results.filter(item => {
        return filters.filter_source.includes(item.source);
      });
    }
    console.log('Results 2', results);

    // Filter entry type.
    results = results.filter(item => {
      return !item.entry_type || item.entry_type === '' || filters.filter_entry_type.includes(item.entry_type);
    });
    console.log('Results 3', results);

    // Filter canon.
    if (filters.filter_canon) {
      results = results.filter(item => {
        return filters.filter_canon.includes(item.canon);
      });
    }
    console.log('Results 4', results);

    // Sort.
    switch (filters.sort_results) {
      case 'In-universe date':
        results = results.filter(item => {
          return item.reference_date && item.reference_date !== '';
        });
        results = results.sort(function (a, b) {
          return new Date(a.reference_date) - new Date(b.reference_date);
        });
        break;

      case 'Timeline placement':
        results = results.filter(item => {
          return item.timeline_index && item.timeline_index !== null;
        });
        results = results.sort(function (a, b) {
          return parseInt(a.timeline_index, 10) > parseInt(b.timeline_index, 10);
        });
        break;

      default:
        results = results.filter(item => {
          return item.release_date && item.release_date !== '';
        });
        results = results.sort(function (a, b) {
          return new Date(a.release_date) - new Date(b.release_date);
        });
    }

    // Return the final results.
    return results;
  }

  render() {
    let results = this.getResults();
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
