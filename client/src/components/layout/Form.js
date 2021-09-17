import React, { useState, useContext, useEffect } from 'react';
import FormContext from '../../context/form/formContext';
import Rating from '@mui/material/Rating';
import { fontSize } from '@mui/system';

const Form = () => {
  const formContext = useContext(FormContext);

  const { getSurvey, APIRes, addAnswer, POSTRes } = formContext;

  useEffect(() => {
    getSurvey();
  }, []);

  const [survey, setSurvey] = useState({
    film: '',
    review: null,
  });

  const { film, review } = survey;

  /* example of form but without validation */
  const onChange = (e) =>
    setSurvey({ ...survey, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    addAnswer(APIRes.data.id, survey);
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

      {POSTRes && POSTRes.errors && (
        <div className='alert'>{POSTRes.errors[0].msg}</div>
      )}

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
        required
      />

      {/* Review */}
      {APIRes && (
        <label className='text-primary'>
          {APIRes.data.attributes.questions[1].label}
        </label>
      )}

      <div>
        <Rating
          name='review'
          value={review}
          onChange={onChange}
          precision={0.5}
          size='large'
        />
      </div>

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
