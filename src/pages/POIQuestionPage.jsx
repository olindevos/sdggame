import React from 'react';
import POIPage from '../POIPage';

const POIQuestionPage = () => {
  return (
    <POIPage
      apiUrl="http://87.106.86.138:8000/questions/initial"
      isQuestionPage={true}
    />
  );
};

export default POIQuestionPage;
