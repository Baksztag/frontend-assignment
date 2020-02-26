import React from 'react';
import PropTypes from 'prop-types';

import ArticlePreview from './ArticlePreview';
import EmptyList from './EmptyList';

import './ArticleList.sass';

const ArticleList = ({
  articles,
  errorOccurred,
  loading,
}) => {
  const noArticles = articles.length === 0;
  if (noArticles || errorOccurred || loading) {
    return (
      <EmptyList
        errorOccurred={errorOccurred}
        loading={loading}
        noArticles={noArticles}
      />
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
  errorOccurred: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};
ArticleList.defaultProps = {
  articles: [],
};

export default ArticleList;
