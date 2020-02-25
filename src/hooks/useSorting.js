import { useState } from 'react';

import { SORTING_TYPES } from '../utils/enums';

const useSorting = () => {
  const [currentSorting, setCurrentSorting] = useState(SORTING_TYPES.NONE);

  const onCurrentSortingChange = () => {
    switch (currentSorting) {
      case SORTING_TYPES.NONE:
        setCurrentSorting(SORTING_TYPES.ASCENDING);
        break;
      case SORTING_TYPES.DESCENDING:
        setCurrentSorting(SORTING_TYPES.DESCENDING);
        break;
      case SORTING_TYPES.ASCENDING:
        setCurrentSorting(SORTING_TYPES.NONE);
        break;
      default:
        setCurrentSorting(SORTING_TYPES.NONE);
    }
  };

  return {
    currentSorting,
    onCurrentSortingChange,
  };
};

export default useSorting;
