import React, { useReducer } from 'react';
import axios from 'axios';
import FormContext from './formContext';
import formReducer from './formReducer';

const FormState = (props) => {
  const initialState = {
    APIRes: null,
    error: null,
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  // Get Survey
  const getSurvey = async () => {
    try {
      let res = await axios.get('/api/v1/survey');
      console.log('im here', res);
      dispatch({
        type: 'getSurvey',
        payload: res.data,
      });
    } catch (error) {
      console.error(error);

      dispatch({
        type: 'surveyError',
        payload: error.response.msg,
      });
    }
  };

  return (
    <FormContext.Provider
      value={{
        APIRes: state.APIRes,
        error: state.error,
        getSurvey,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormState;
