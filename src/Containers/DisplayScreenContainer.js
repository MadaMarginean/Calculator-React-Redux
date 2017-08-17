import { connect } from 'react-redux'
import DisplayScreen from '../Components/DisplayScreen'

const mapStateToProps = state => {
  return {
    digitsString: state.calculator.digitsString
  }
};

const displayScreenContainer = connect(mapStateToProps, null)(DisplayScreen);

export default displayScreenContainer
