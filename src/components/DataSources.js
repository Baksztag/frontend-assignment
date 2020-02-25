import React from 'react';
import PropTypes from 'prop-types';

import { FILTER_TYPES } from '../utils/enums';

const DataSources = ({ isFilterSelected, onFilterChange }) => (
  <div>
    <form>
      <label htmlFor="fashion-data-source">
        <input
          id="fashion-data-source"
          type="checkbox"
          checked={isFilterSelected(FILTER_TYPES.FASHION)}
          onChange={() => onFilterChange(FILTER_TYPES.FASHION)}
        />
        Fashion
      </label>
      <label htmlFor="sports-data-source">
        <input
          id="sports-data-source"
          type="checkbox"
          checked={isFilterSelected(FILTER_TYPES.SPORT)}
          onChange={() => onFilterChange(FILTER_TYPES.SPORT)}
        />
        Sports
      </label>
    </form>
  </div>
);

DataSources.propTypes = {
  isFilterSelected: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default DataSources;
