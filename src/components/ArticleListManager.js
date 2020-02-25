import React from 'react';
import PropTypes from 'prop-types';

import Content from './Content';

import useFilters from '../hooks/useFilters';

const ArtworkListManager = ({ articles }) => {
  const { isFilterSelected, onFilterChange, selectedFilters } = useFilters();

  const processedArticles = articles
    .filter((article) => selectedFilters.includes(article.category));

  return (
    <Content
      articles={processedArticles}
      isFilterSelected={isFilterSelected}
      onFilterChange={onFilterChange}
    />
  );
};

ArtworkListManager.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ArtworkListManager;
