import React from 'react';

const DataSources = () => (
  <div>
    <form>
      <label htmlFor="fashion-data-source">
        <input
          id="fashion-data-source"
          type="checkbox"
        />
        Fashion
      </label>
      <label htmlFor="sports-data-source">
        <input
          id="sports-data-source"
          type="checkbox"
        />
        Sports
      </label>
    </form>
  </div>
);

export default DataSources;
