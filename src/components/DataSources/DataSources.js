import React from 'react';
import PropTypes from 'prop-types';

import { FILTER_TYPES } from '../../utils/enums';

import './DataSources.sass';

const DataSources = ({ isFilterSelected, onFilterChange }) => (
  <div className="data-sources">
    <form>
      <fieldset>
        <legend>Data sources</legend>
        <div>
          <label htmlFor="fashion-data-source">
            <input
              id="fashion-data-source"
              type="checkbox"
              checked={isFilterSelected(FILTER_TYPES.FASHION)}
              onChange={() => onFilterChange(FILTER_TYPES.FASHION)}
            />
            <span>
              Fashion
            </span>
          </label>
        </div>
        <div>
          <label htmlFor="sports-data-source">
            <input
              id="sports-data-source"
              type="checkbox"
              checked={isFilterSelected(FILTER_TYPES.SPORT)}
              onChange={() => onFilterChange(FILTER_TYPES.SPORT)}
            />
            <span>
              Sports
            </span>
          </label>
        </div>
      </fieldset>
    </form>
  </div>
);

DataSources.propTypes = {
  isFilterSelected: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default DataSources;
