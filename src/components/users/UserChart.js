import React from 'react';
import CustomSpinner from '../layout/CustomSpinner';

import convertData from '../../functions/convertData';
import getRandomColor from '../../functions/getRandomColor';

import { Pie } from 'react-chartjs-2';

const UserChart = ({ repos, loading }) => {
  const { keys, counts } = convertData(repos);
  const data = {
    labels: keys,
    datasets: [
      {
        data: counts,
        backgroundColor: keys.map(() => {
          return getRandomColor();
        })
      }
    ]
  };
  if (loading) return <CustomSpinner />;
  return (
    <div className='text-center mt-3'>
      <span>Last {repos.length} repos</span>
      <Pie data={data} height={150} />
    </div>
  );
};

export default UserChart;
