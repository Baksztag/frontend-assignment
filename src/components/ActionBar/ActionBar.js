import React from 'react';
import PropTypes from 'prop-types';

import DataSources from '../DataSources/DataSources';

import { SORTING_TYPES } from '../../utils/enums';

import { ReactComponent as ArrowDown } from './arrow_downward-24px.svg';
import { ReactComponent as ArrowUp } from './arrow_upward-24px.svg';
import './ActionBar.sass';

const ActionBar = ({
  currentSorting,
  isFilterSelected,
  onCurrentSortingChange,
  onFilterChange,
}) => (
  <div className="action-bar">
    <div className="action-bar__content">
      <DataSources
        isFilterSelected={isFilterSelected}
        onFilterChange={onFilterChange}
        displayOnMobile
      />
      <button
        className="action-bar__button"
        onClick={onCurrentSortingChange}
        type="button"
      >
      <span>
        Sort by date
      </span>
        {currentSorting === SORTING_TYPES.DESCENDING
          ? (<ArrowDown />)
          : (<ArrowUp />)}
      </button>
    </div>
  </div>
);

ActionBar.propTypes = {
  currentSorting: PropTypes.oneOf(Object.values(SORTING_TYPES)).isRequired,
  isFilterSelected: PropTypes.func.isRequired,
  onCurrentSortingChange: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default ActionBar;
