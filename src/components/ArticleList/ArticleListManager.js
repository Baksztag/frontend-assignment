import React from 'react';
import PropTypes from 'prop-types';

import Content from '../Content';

import useFilters from '../../hooks/useFilters';
import useSorting from '../../hooks/useSorting';
import articlePropShape from '../../utils/articlePropShape';
import compareDates from '../../utils/compareDates';
import { SORTING_TYPES } from '../../utils/enums';

const ArtworkListManager = ({ articles, errorOccurred, loading }) => {
  const { isFilterSelected, onFilterChange, selectedFilters } = useFilters();
  const { currentSorting, onCurrentSortingChange } = useSorting();

  const processedArticles = articles
    .filter((article) => selectedFilters.includes(article.category))
    .sort(
      (firstArticle, secondArticle) => compareDates(
        firstArticle.date,
        secondArticle.date,
        currentSorting === SORTING_TYPES.ASCENDING,
      ),
    );

  return (
    <Content
      articles={processedArticles}
      currentSorting={currentSorting}
      errorOccurred={errorOccurred}
      isFilterSelected={isFilterSelected}
      loading={loading}
      onCurrentSortingChange={onCurrentSortingChange}
      onFilterChange={onFilterChange}
    />
  );
};

ArtworkListManager.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape(articlePropShape)).isRequired,
  errorOccurred: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default ArtworkListManager;
