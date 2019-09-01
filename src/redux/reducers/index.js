import {
  CHANGE_PERIOD,
  CHANGE_TYPE,
  GET_BOND_DATA_SUCCESS,
} from '../actions';

const initialState = {
  selectedOption: {
    value: 'yield',
    label: 'Yield',
  },
  chartData: [],
  periodType: 0,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_TYPE:
      return {
        ...state,
        selectedOption: payload.selectedOption,
      };
    case GET_BOND_DATA_SUCCESS:
      return {
        ...state,
        chartData: payload.chartData,
      };
    case CHANGE_PERIOD:
      return {
        ...state,
        periodType: payload.periodType,
      };

    default:
      return state;
  }
};
