import React from 'react';
import PropTypes from 'prop-types';

const EmptyList = ({
  errorOccurred,
  loading,
  noArticles,
}) => {
  let text = '';
  if (noArticles) text = 'No articles available';
  if (errorOccurred) text = 'Something went wrong. Please refresh the page or try again later';
  if (loading) text = 'Loading articles';

  return (
    <div className="article-list--empty">
      {text}
    </div>
  );
};

EmptyList.propTypes = {
  errorOccurred: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  noArticles: PropTypes.bool.isRequired,
};

export default EmptyList;
