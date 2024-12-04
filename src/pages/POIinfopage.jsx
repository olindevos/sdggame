import React from 'react';
import POIPage from '../POIPage';

const POIInfoPage = () => {
  return (
    <POIPage
      apiUrl="http://87.106.86.138:8000/poi/info"
      isQuestionPage={false}
    />
  );
};

export default POIInfoPage;
