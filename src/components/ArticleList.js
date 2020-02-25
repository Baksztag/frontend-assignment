import React from 'react';
import PropTypes from 'prop-types';

const ArticleList = ({ articles }) => (
  <div>
    {articles.map((article) => (
      <div key={article.id}>
        {JSON.stringify(article)}
      </div>
    ))}
  </div>
);

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({})),
};
ArticleList.defaultProps = {
  articles: [],
};

export default ArticleList;
