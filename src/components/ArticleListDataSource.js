import React from 'react';

import useDataSource from '../hooks/useDataSource';

import ArticleList from './ArticleList';
import ErrorMessage from './ErrorMessage';
import Loader from './Loader';

const ArticleListDataSource = () => {
  const {
    data: fashionData,
    error: fashionError,
    loading: fashionLoading,
  } = useDataSource({ uri: 'http://localhost:6010/articles/fashion' });
  const {
    data: sportsData,
    error: sportsError,
    loading: sportsLoading,
  } = useDataSource({ uri: 'http://localhost:6010/articles/sports' });

  const loading = fashionLoading && sportsLoading;
  const errorOccurred = fashionError || sportsError;
  const articles = fashionData && sportsData
    ? fashionData.articles.concat(sportsData.articles)
    : [];

  if (loading) {
    return (<Loader />);
  }
  if (errorOccurred) {
    return (<ErrorMessage />);
  }

  return (
    <ArticleList articles={articles} />
  );
};

export default ArticleListDataSource;
