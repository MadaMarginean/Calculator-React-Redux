import { connect } from 'react-redux';
import {
storeNumberToArray,
add,
substract,
multiply,
division,
equal } from '../actions/calculator';
import SpecialButtonGroup from '../components/calculator/SpecialButtonGroup';

const mapDispatchToProps = {
  storeNumberToArray: storeNumberToArray,
  onAddButtonClick: add,
  onSubstractButtonClick: substract,
  onMultiplyButtonClick: multiply,
  onDivisionButtonClick: division,
  onEqualButtonClick: equal
};

const specialButtonContainer = connect(null, mapDispatchToProps)(SpecialButtonGroup);

export default specialButtonContainer
