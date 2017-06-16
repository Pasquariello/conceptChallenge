import { connect } from 'react-redux'
import Form from '../components/Form'

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  
  return {
    saveLocation: (location) => {

      dispatch({
        type: 'STORE_LOCATIONS',
        data: location,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
