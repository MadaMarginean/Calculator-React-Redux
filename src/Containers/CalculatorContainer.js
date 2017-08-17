import { connect } from 'react-redux'
import Calculator from '../Components/Calculator'
import {changeDisplayColor} from '../Actions/actions'

const mapStateToProps = state => {
  return {
    calcBackground: state.calculator.calcBackground
  }
};

const displayCalculatorContainer = connect(mapStateToProps, null)(Calculator);

export default displayCalculatorContainer
