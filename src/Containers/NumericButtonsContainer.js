import { connect } from 'react-redux'
import { concatenateToNumber } from '../Actions/actions'
import NumericButtonGroup from '../Components/NumericButtonGroup'

const mapDispatchToProps = dispatch => {
  return {
    onButtonClick: digit => {
      dispatch(concatenateToNumber(digit))
    }
  }
}

const numericButtonsContainer = connect(null, mapDispatchToProps)(NumericButtonGroup);
                                    /* primul param din connect = ce se ia de pe state sa afiseze, al 2-lea ce se pune pe state (action-urile mele),
                                    NumericButtonGroup cu ce se leaga */
export default numericButtonsContainer
