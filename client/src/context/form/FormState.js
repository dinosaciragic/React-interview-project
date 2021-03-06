import React, { useReducer } from 'react';
import axios from 'axios';
import FormContext from './formContext';
import formReducer from './formReducer';

const FormState = (props) => {
  const initialState = {
    APIRes: null,
    POSTRes: null,
    error: null,
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  // Get Survey
  const getSurvey = async () => {
    try {
      let res = await axios.get('http://localhost:5000/api/v1/survey');

      dispatch({
        type: 'getSurvey',
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Add Answer
  const addAnswer = async (id, answer) => {
    const config = {
      headers: {
        'Content-Type': 'application/json ',
      },
    };

    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/survey/${id}/answers`,
        answer,
        config
      );

      dispatch({
        type: 'addAnswer',
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormContext.Provider
      value={{
        APIRes: state.APIRes,
        POSTRes: state.POSTRes,
        error: state.error,
        addAnswer,
        getSurvey,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormState;
