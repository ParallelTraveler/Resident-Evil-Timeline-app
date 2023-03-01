import * as React from 'react';
import ResultItem from './ResultItem';

export default class ResultContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filters: {} };
  }

  getResults() {
    let filterData = this.props.filterData;
    let filters = this.props.filters;
    let results = this.props.data;

    // Quit if we are not instructed to show results.
    if (!this.props.show) {
      return [];
    }

    // Set defaults.
    if (!filters.hasOwnProperty('filter_source') && filterData.source.default) {
      filters.filter_source = filterData.source.default;
    }
    if (!filters.hasOwnProperty('filter_canon') && filterData.canon.default) {
      filters.filter_canon = filterData.canon.default;
    }
    if (!filters.hasOwnProperty('filter_entry_type') && filterData.entry_type.default) {
      filters.filter_entry_type = filterData.entry_type.default[0];
    }
    if (!filters.hasOwnProperty('sort_results') && filterData.sort_results.default) {
      filters.sort_results = filterData.sort_results.default[0];
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
        results = results.filter(item => {
          return item.reference_date !== '';
        });
        results = results.sort(function (a, b) {
          return new Date(a.reference_date) - new Date(b.reference_date);
        });
        break;

      default:
        results = results.filter(item => {
          return item.release_date !== '';
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
