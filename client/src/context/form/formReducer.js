export default (state, action) => {
  switch (action.type) {
    case 'getSurvey':
      return {
        ...state,
        APIRes: action.payload,
      };
    case 'surveyError':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
