import React from 'react';
import PropTypes from 'prop-types';

import ActionBar from './ActionBar';
import ArticleList from './ArticleList';
import DataSources from './DataSources';
import { SORTING_TYPES } from '../utils/enums';

const Content = ({
  articles,
  currentSorting,
  isFilterSelected,
  onCurrentSortingChange,
  onFilterChange,
}) => (
  <div>
    <ActionBar
      currentSorting={currentSorting}
      onCurrentSortingChange={onCurrentSortingChange}
    />
    <div>
      <DataSources
        isFilterSelected={isFilterSelected}
        onFilterChange={onFilterChange}
      />
      <ArticleList
        articles={articles}
      />
    </div>
  </div>
);

Content.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  currentSorting: PropTypes.oneOf(Object.values(SORTING_TYPES)).isRequired,
  isFilterSelected: PropTypes.func.isRequired,
  onCurrentSortingChange: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Content;
