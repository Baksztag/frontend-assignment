import React from 'react';
import PropTypes from 'prop-types';

import articlePropShape from '../../utils/articlePropShape';

import './ArticlePreview.sass';

const ArticlePreview = ({ article }) => (
  <div className="article-preview">
    {article.image
      ? (
        <img
          className="article-preview__img"
          src={article.image}
          alt="article-preview"
        />
      )
      : (
        <div className="article-preview__img--none">
          No preview available
        </div>
      )}
    <div className="article-preview__content">
      <div className="article-preview__header">
          <h2 className="article-preview__h2">
            {article.title}
          </h2>
        <div className="article-preview__date">
          {article.date}
        </div>
      </div>
      <div className="article-preview__preamble">
        {article.preamble}
      </div>
    </div>
  </div>
);

ArticlePreview.propTypes = {
  article: PropTypes.shape(articlePropShape).isRequired,
};

export default ArticlePreview;
