import React from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { FakeData } from './../api/FakeData';
import { connect } from 'react-redux';
import { attemptGetBondData } from '../redux/actions';
import { getChartConfigs } from '../helpers/getChartConfigs';

am4core.useTheme(am4themes_animated);

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.initializeChart = this.initializeChart.bind(this);
  }

  initializeChart() {
    let chart = am4core.create('chartdiv', am4charts.XYChart);
    am4core.options.commercialLicense = true;
    getChartConfigs(chart, this.props.selectedOption);
    chart.data = FakeData[this.props.periodType];
  }

  componentDidMount() {
    this.initializeChart();
    this.props.attemptGetBondData();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevProps.selectedOption !== this.props.selectedOption ||
      prevProps.chartData !== this.props.chartData ||
      prevProps.periodType !== this.props.periodType
    ) {
      this.initializeChart();
      this.props.attemptGetBondData();
    }
  }

  render() {
    return <div id="chartdiv" style={{ width: '50%', height: '500px' }} />;
  }
}

const mapStateToProps = store => {
  return {
    selectedOption: store.selectedOption,
    chartData: store.chartData,
    periodType: store.periodType,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    attemptGetBondData: () => dispatch(attemptGetBondData()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chart);
