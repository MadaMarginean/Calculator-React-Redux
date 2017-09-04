import { connect } from 'react-redux';
import Calculator from '../components/calculator/Calculator';

const mapStateToProps = state => ({
    calcBackground: state.calculator.calcBackground
});

const displayCalculatorContainer = connect(mapStateToProps, null)(Calculator);

export default displayCalculatorContainer
