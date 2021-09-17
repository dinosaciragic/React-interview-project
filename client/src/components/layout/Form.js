import React, { useState, useContext, useEffect } from 'react';
import FormContext from '../../context/form/formContext';

const Form = () => {
  const formContext = useContext(FormContext);

  const { getSurvey, APIRes } = formContext;

  useEffect(() => {
    getSurvey();
  }, []);

  const [survey, setSurvey] = useState({
    film: '',
    review: '',
  });

  const { film, review } = survey;

  /* example of form but without validation */
  const onChange = (e) =>
    setSurvey({ ...survey, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      {APIRes && (
        <h2 className='text-primary'>{APIRes.data.attributes.title}</h2>
      )}

      {APIRes && (
        <div style={{ marginBottom: '10px' }}>
          {APIRes.data.attributes.description}
        </div>
      )}

      {/*    {APIRes && APIRes.data.attributes.questions.map((question) => {
        label
         <input
         type='text'
         placeholder='Film'
         name='film'
         value={film}
         onChange={onChange}
       />
      })} */}

      {/* Film */}
      {APIRes && (
        <label className='text-primary'>
          {APIRes.data.attributes.questions[0].label}
        </label>
      )}
      <input
        type='text'
        placeholder='Film'
        name='film'
        value={film}
        onChange={onChange}
      />

      {/* Review */}
      {APIRes && (
        <label className='text-primary'>
          {APIRes.data.attributes.questions[1].label}
        </label>
      )}
      <input
        type='text'
        placeholder='Review'
        name='review'
        value={review}
        onChange={onChange}
      />

      {/* Submit button */}
      <div>
        <input
          type='submit'
          value='Submit'
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
};

export default Form;
