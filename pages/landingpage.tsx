import React, { useState } from 'react';
import QuestionForm from './QuestionForm';
import styles from '/styles/landingpage.module.css';
import QuestionList from './QuestionList';

const LandingPage = () => {

  return (
    <div>
      <div className={styles.navbar}> 
        <div> Aishwi Technologies </div>
        <div> profile </div>
        <div> Leaderboard </div>
        <div> Contact US </div>
    </div>
      <QuestionForm> </QuestionForm>
      <QuestionList> </QuestionList>
    </div>
    

  );
};

export default LandingPage;
