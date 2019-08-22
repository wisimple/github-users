import _ from 'lodash';

const convertData = repos => {
  const grouped = _.groupBy(repos, 'language');
  let keys = Object.keys(grouped);
  let counts = [];
  keys.forEach((key, index) => {
    counts.push(grouped[key].length);
    if (key === 'null') {
      keys[index] = 'Unknown';
    }
  });
  return { keys, counts };
};

export default convertData;
