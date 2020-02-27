import React from 'react';
import PropTypes from 'prop-types';

import { FILTER_TYPES } from '../../utils/enums';

import './DataSources.sass';

const DataSources = ({ displayOnMobile, isFilterSelected, onFilterChange }) => (
  <div className={displayOnMobile ? 'data-sources--mobile' : 'data-sources'}>
    <form>
      <fieldset>
        <legend>Data sources</legend>
        <div className="checkbox-wrapper">
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
  displayOnMobile: PropTypes.bool,
  isFilterSelected: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
DataSources.defaultProps = {
  displayOnMobile: false,
};

export default DataSources;
