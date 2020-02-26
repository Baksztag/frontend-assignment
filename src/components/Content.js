import React from 'react';
import PropTypes from 'prop-types';

import ActionBar from './ActionBar/ActionBar';
import ArticleList from './ArticleList/ArticleList';
import DataSources from './DataSources/DataSources';
import { SORTING_TYPES } from '../utils/enums';

import './Content.sass';

const Content = ({
  articles,
  currentSorting,
  isFilterSelected,
  onCurrentSortingChange,
  onFilterChange,
}) => (
  <div className="content-container">
    <ActionBar
      currentSorting={currentSorting}
      onCurrentSortingChange={onCurrentSortingChange}
    />
    <div className="content">
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
