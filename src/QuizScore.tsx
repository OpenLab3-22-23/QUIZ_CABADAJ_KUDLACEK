import React from 'react';

const QuizScore = ({ score, numCorrect, numIncorrect, totalQuestions }) => {
  return (
    <>
    <h1 className= "quiz-nadpis">QUIZ RESULTS</h1>
    <div className="quiz-score">
      <h2 className="quiz-points">Score: {score} / {totalQuestions}</h2>
      <h3 className="quiz-points">Correct Answers: {numCorrect}</h3>
      <h3 className="quiz-points">Incorrect Answers: {numIncorrect}</h3>
    </div>
    </>
  );
};

export default QuizScore;