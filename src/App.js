import React from 'react';

import ActionBar from './components/ActionBar';
import ArticleListManager from './components/ArticleListManager';
import DataSources from './components/DataSources';

const App = () => (
  <div>
    <ActionBar />
    <div>
      <DataSources />
      <ArticleListManager />
    </div>
  </div>
);

export default App;
