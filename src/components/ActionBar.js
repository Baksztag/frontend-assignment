import React from 'react';
import PropTypes from 'prop-types';

import { SORTING_TYPES } from '../utils/enums';

const ActionBar = ({ currentSorting, onCurrentSortingChange }) => (
  <button
    onClick={onCurrentSortingChange}
    type="button"
  >
    <span>
      Sort by date
    </span>
    <div>
      {currentSorting}
    </div>
  </button>
);

ActionBar.propTypes = {
  currentSorting: PropTypes.oneOf(Object.values(SORTING_TYPES)).isRequired,
  onCurrentSortingChange: PropTypes.func.isRequired,
};

export default ActionBar;
