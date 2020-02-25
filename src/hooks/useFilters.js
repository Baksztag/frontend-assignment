import { useState } from 'react';

import { FILTER_TYPES } from '../utils/enums';

const useFilters = () => {
  const [
    selectedFilters,
    setSelectedFilters,
  ] = useState([FILTER_TYPES.FASHION, FILTER_TYPES.SPORTS]);

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
  };
};

export default useFilters();
