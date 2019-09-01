import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { handleChangeType } from '../redux/actions';

const options = [
  { value: 'yield', label: 'Yield' },
  { value: 'spread', label: 'Spread' },
  { value: 'price', label: 'price' },
];

class TypeSelect extends React.Component {
  handleChange = selectedOption => {
    this.props.changeChartDataType(selectedOption);
  };

  render() {
    const { selectedOption } = this.props;

    return (
      <div className="customSelect">
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    selectedOption: store.selectedOption,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    changeChartDataType: type => dispatch(handleChangeType(type)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TypeSelect);
