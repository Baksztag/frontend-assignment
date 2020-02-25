import { useState } from 'react';

import { FILTER_TYPES } from '../utils/enums';

const useFilters = () => {
  const [
    selectedFilters,
    setSelectedFilters,
  ] = useState([FILTER_TYPES.FASHION, FILTER_TYPES.SPORT]);

  const isFilterSelected = (filter) => selectedFilters.includes(filter);

  const onFilterChange = (filter) => {
    if (isFilterSelected(filter)) {
      setSelectedFilters([
        ...(selectedFilters.filter((selectedFilter) => selectedFilter !== filter)),
      ]);
    } else {
      setSelectedFilters([
        ...selectedFilters,
        filter,
      ]);
    }
  };

  return {
    isFilterSelected,
    onFilterChange,
    selectedFilters,
  };
};

export default useFilters;
