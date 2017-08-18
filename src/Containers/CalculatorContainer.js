import { connect } from 'react-redux';
import Calculator from '../Components/Calculator';

const mapStateToProps = state => {
  return {
    calcBackground: state.calculator.calcBackground
  }
};

const displayCalculatorContainer = connect(mapStateToProps, null)(Calculator);

export default displayCalculatorContainer
