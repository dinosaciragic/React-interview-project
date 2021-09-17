import React, { useContext } from 'react';
import FormContext from '../../context/form/formContext';

const SuccessPage = () => {
  const formContext = useContext(FormContext);

  const { POSTRes } = formContext;

  return (
    <div>
      <p className='large'>
        Thank you very much for participating in our survey!
      </p>

      {POSTRes && (
        <ul>
          <li>Movie: {POSTRes.data.attributes.answers[0].answer}</li>
          <li>Rating: {POSTRes.data.attributes.answers[1].answer} </li>
        </ul>
      )}
    </div>
  );
};

export default SuccessPage;
