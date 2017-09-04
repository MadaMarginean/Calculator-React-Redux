import { connect } from 'react-redux';
import DisplayScreen from '../components/calculator/DisplayScreen';
import { changeDisplayColor } from '../actions/calculator';

const mapStateToProps = state => ({
    digitsString: state.calculator.digitsString,
    background: state.calculator.background
});

const mapDispatchToProps = {
  onDisplayClick: changeDisplayColor
};

const displayScreenContainer = connect(mapStateToProps, mapDispatchToProps)(DisplayScreen)

export default displayScreenContainer
