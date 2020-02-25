import React from 'react';

import ActionBar from './components/ActionBar';
import ArticleListDataSource from './components/ArticleListDataSource';
import DataSources from './components/DataSources';

const App = () => (
  <div>
    <ActionBar />
    <div>
      <DataSources />
      <ArticleListDataSource />
    </div>
  </div>
);

export default App;
