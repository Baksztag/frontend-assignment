import React from 'react';
import PropTypes from 'prop-types';

import ArticlePreview from './ArticlePreview';

import './ArticleList.sass';

const ArticleList = ({ articles }) => {
  if (articles.length === 0) {
    return (
      <div className="article-list--empty">
        No articles available
      </div>
    );
  }
  return (
    <div className="article-list">
      {articles.map((article) => (
        <ArticlePreview
          article={article}
          key={article.id}
        />
      ))}
    </div>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({})),
};
ArticleList.defaultProps = {
  articles: [],
};

export default ArticleList;
