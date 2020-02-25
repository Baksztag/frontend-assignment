import React from 'react';
import PropTypes from 'prop-types';

import ActionBar from './ActionBar';
import ArticleList from './ArticleList';
import DataSources from './DataSources';

const Content = ({
  articles,
  isFilterSelected,
  onFilterChange,
}) => (
  <div>
    <ActionBar />
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
  isFilterSelected: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,

};

export default Content;
