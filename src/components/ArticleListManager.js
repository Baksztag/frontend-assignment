import React from 'react';
import PropTypes from 'prop-types';

import Content from './Content';

import useFilters from '../hooks/useFilters';
import useSorting from '../hooks/useSorting';
import compareDates from '../utils/compareDates';
import { SORTING_TYPES } from '../utils/enums';

const ArtworkListManager = ({ articles }) => {
  const { isFilterSelected, onFilterChange, selectedFilters } = useFilters();
  const { currentSorting, onCurrentSortingChange } = useSorting();

  const processedArticles = articles
    .filter((article) => selectedFilters.includes(article.category));
  if (currentSorting !== SORTING_TYPES.NONE) {
    processedArticles.sort(
      (firstArticle, secondArticle) => compareDates(
        firstArticle.date,
        secondArticle.date,
        currentSorting === SORTING_TYPES.ASCENDING,
      ),
    );
  }

  return (
    <Content
      articles={processedArticles}
      currentSorting={currentSorting}
      isFilterSelected={isFilterSelected}
      onCurrentSortingChange={onCurrentSortingChange}
      onFilterChange={onFilterChange}
    />
  );
};

ArtworkListManager.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ArtworkListManager;
