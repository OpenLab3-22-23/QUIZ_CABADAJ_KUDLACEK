import React from 'react';
import QuizScore from './QuizScore';

const ScorePage = ({ score, numCorrect, numIncorrect, totalQuestions }) => {
  return (
    <div>
      <h1>Skóre</h1>
      <QuizScore score={score} numCorrect={numCorrect} numIncorrect={numIncorrect} totalQuestions={totalQuestions} />
    </div>
  );
};

export default ScorePage;
