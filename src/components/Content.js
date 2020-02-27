import React from 'react';
import PropTypes from 'prop-types';

import ActionBar from './ActionBar/ActionBar';
import ArticleList from './ArticleList/ArticleList';
import DataSources from './DataSources/DataSources';

import articlePropShape from '../utils/articlePropShape';
import { SORTING_TYPES } from '../utils/enums';

import './Content.sass';

const Content = ({
  articles,
  currentSorting,
  errorOccurred,
  isFilterSelected,
  loading,
  onCurrentSortingChange,
  onFilterChange,
}) => (
  <div className="content-container">
    <ActionBar
      currentSorting={currentSorting}
      isFilterSelected={isFilterSelected}
      onCurrentSortingChange={onCurrentSortingChange}
      onFilterChange={onFilterChange}
    />
    <div className="content">
      <DataSources
        isFilterSelected={isFilterSelected}
        onFilterChange={onFilterChange}
      />
      <ArticleList
        articles={articles}
        errorOccurred={errorOccurred}
        loading={loading}
      />
    </div>
  </div>
);

Content.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape(articlePropShape)).isRequired,
  currentSorting: PropTypes.oneOf(Object.values(SORTING_TYPES)).isRequired,
  errorOccurred: PropTypes.bool.isRequired,
  isFilterSelected: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  onCurrentSortingChange: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Content;
