import { connect } from 'react-redux'
import { storeNumberToArray, add, substract, multiply, division, equal } from '../Actions/actions'
import SpecialButtonGroup from '../Components/SpecialButtonGroup'

const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => {
  return {
    storeNumberToArray: function(){
      dispatch(storeNumberToArray())
    },
    onAddButtonClick: function(){
      dispatch(add())
    },
    onSubstractButtonClick: function(){
      dispatch(substract())
    },
    onMultiplyButtonClick: function(){
      dispatch(multiply())
    },
    onDivisionButtonClick: function(){
      dispatch(division())
    },
    onEqualButtonClick: function(){
      dispatch(equal())
    }
  }
}

const specialButtonContainer = connect(mapStateToProps, mapDispatchToProps)(SpecialButtonGroup);


export default specialButtonContainer
