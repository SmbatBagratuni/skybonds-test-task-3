import React from 'react';
import { changePeriod, handleChangeType } from '../redux/actions';
import { connect } from 'react-redux';
import { mapPeriods } from '../configs/constants';

const PeriodSelect = (props) => {
    const { periodType, changePeriod } = props;
    return (
      <div className="buttonContainer">
        {mapPeriods.map(({ type }, index) => (
          <button
            className={`${periodType === index ? 'active' : ''}`}
            onClick={() => changePeriod(index)}
            key={index}
          >
            {type}
          </button>
        ))}
      </div>
    );
  };

const mapStateToProps = store => ({
  periodType: store.periodType,
});

const mapDispatchToProps = dispatch => ({
  changeChartDataType: type => dispatch(handleChangeType(type)),
  changePeriod: period => dispatch(changePeriod(period)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PeriodSelect);
