import React, { useEffect, useContext } from 'react';
import FormContext from '../../context/form/formContext';

const Home = () => {
  const formContext = useContext(FormContext);

  const { getSurvey } = formContext;

  useEffect(() => {
    getSurvey();
    // eslint-disable-next-line
  }, []);

  return <div className='grid-2'>Hello home</div>;
};

export default Home;
