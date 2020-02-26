import { useState } from 'react';

import { SORTING_TYPES } from '../utils/enums';

const useSorting = () => {
  const [currentSorting, setCurrentSorting] = useState(SORTING_TYPES.ASCENDING);

  const onCurrentSortingChange = () => {
    switch (currentSorting) {
      case SORTING_TYPES.ASCENDING:
        setCurrentSorting(SORTING_TYPES.DESCENDING);
        break;
      case SORTING_TYPES.DESCENDING:
        setCurrentSorting(SORTING_TYPES.ASCENDING);
        break;
      default:
        setCurrentSorting(SORTING_TYPES.ASCENDING);
    }
  };

  return {
    currentSorting,
    onCurrentSortingChange,
  };
};

export default useSorting;
