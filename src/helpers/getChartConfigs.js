import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4core from '@amcharts/amcharts4/core';

export const getChartConfigs = (chart, selectedOption) => {
  // Create axes
  let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  chart.yAxes.push(new am4charts.ValueAxis());
  // Create series
  let series = chart.series.push(new am4charts.LineSeries());
  // alert(this.props.selectedOption)
  series.dataFields.valueY = `${selectedOption.value}`;
  series.dataFields.dateX = 'date';
  series.tooltipText = `{${selectedOption.value}}`;
  series.strokeWidth = 2;
  series.minBulletDistance = 15;

  // Drop-shaped tooltips
  series.tooltip.background.cornerRadius = 20;
  series.tooltip.background.strokeOpacity = 0;
  series.tooltip.pointerOrientation = 'vertical';
  series.tooltip.label.minWidth = 40;
  series.tooltip.label.minHeight = 40;
  series.tooltip.label.textAlign = 'middle';
  series.tooltip.label.textValign = 'middle';

  // Make bullets grow on hover
  let bullet = series.bullets.push(new am4charts.CircleBullet());
  bullet.circle.strokeWidth = 2;
  bullet.circle.radius = 2;
  bullet.circle.fill = am4core.color('#fff');

  let bullethover = bullet.states.create('hover');
  bullethover.properties.scale = 1.3;

  // Make a panning cursor
  chart.cursor = new am4charts.XYCursor();
  chart.cursor.behavior = 'panXY';
  chart.cursor.xAxis = dateAxis;
  chart.cursor.snapToSeries = series;

  // Create vertical scrollbar and place it before the value axis
  chart.scrollbarY = new am4core.Scrollbar();
  chart.scrollbarY.parent = chart.leftAxesContainer;
  chart.scrollbarY.toBack();

  // Create a horizontal scrollbar with previe and place it underneath the date axis
  chart.scrollbarX = new am4charts.XYChartScrollbar();
  chart.scrollbarX.series.push(series);
  chart.scrollbarX.parent = chart.bottomAxesContainer;
  chart.dateFormatter.inputDateFormat = 'yyyy-MM-dd';
};
