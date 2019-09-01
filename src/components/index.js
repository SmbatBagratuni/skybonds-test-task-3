import React from 'react';
import PeriodSelect from './PeriodSelect';
import Chart from './Chart';
import TypeSelect from './TypeSelect';

const MainChart = () => (
  <div className="chatContainer">
      <div>
        <PeriodSelect />
        <TypeSelect />
      </div>
    <Chart />
  </div>
);

export default MainChart;
