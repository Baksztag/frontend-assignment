// TODO fix for firefox and safari
const adaptDate = (date) => {
  const timestamp = Date.parse(date);
  if (Number.isNaN(timestamp)) {
    let modifiedDate;
    if (date.includes('desember')) {
      modifiedDate = date.replace('desember', 'december');
    } else if (date.includes('mai')) {
      modifiedDate = date.replace('mai', 'may');
    } else if (date.includes('oktober')) {
      modifiedDate = date.replace('oktober', 'october');
    }
    return new Date(modifiedDate);
  }
  return new Date(timestamp);
};

const compareDate = (firstDateString, secondDateString, ascending) => {
  const firstDate = adaptDate(firstDateString);
  const secondDate = adaptDate(secondDateString);

  if (firstDate < secondDate) {
    return ascending ? -1 : 1;
  }
  if (firstDate > secondDate) {
    return ascending ? 1 : -1;
  }
  return 0;
};

export default compareDate;
