import React from 'react';

import ActionBar from './components/ActionBar';
import ArticleList from './components/ArticleList';
import DataSources from './components/DataSources';

const App = () => (
  <div>
    <ActionBar />
    <div>
      <DataSources />
      <ArticleList />
    </div>
  </div>
);

export default App;
