import { connect } from 'react-redux'
import DisplayScreen from '../Components/DisplayScreen'
import {changeDisplayColor} from '../Actions/actions'

const mapStateToProps = state => {
  return {
    digitsString: state.calculator.digitsString,
    background: state.calculator.background
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onDisplayClick: function() {
      dispatch(changeDisplayColor())
    }
  };
}

const displayScreenContainer = connect(mapStateToProps, mapDispatchToProps)(DisplayScreen)

export default displayScreenContainer
