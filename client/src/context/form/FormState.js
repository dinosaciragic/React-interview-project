import React from 'react';
import axios from 'axios';
import FormContext from './formContext';

const FormState = (props) => {
  // Get Survey
  const getSurvey = async () => {
    try {
      const res = await axios.get('/api/v1/survey');
      console.log(res, 'this is res');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormContext.Provider
      value={{
        getSurvey,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormState;
