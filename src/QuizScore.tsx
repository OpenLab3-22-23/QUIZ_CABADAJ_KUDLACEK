import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { supabase } from './supabase/supabaseClient';


const QuizScore = ({ score, numCorrect, numIncorrect, totalQuestions }) => {
  return (
    <>
    <h1 className= "quiz-nadpis">QUIZ RESULTS</h1>
    <div className="quiz-score">
      <h2 className="quiz-points">Score: {score} / {totalQuestions}</h2>
      <h3 className="quiz-points">Correct Answers: {numCorrect}</h3>
      <h3 className="quiz-points">Incorrect Answers: {numIncorrect}</h3>

      <div className="back-button">
      <Link to="/landingpage">
        <button className="results_button">BACK</button>
      </Link>
        <button className="results_button" onClick={saveScoreToDatabase}>SAVE TO DATABASE</button>
    </div>
    </div>
    </>
  );
};

const saveScoreToDatabase = async ({numCorrect, numIncorrect }) => {
  try {
    const { data, error } = await supabase
      .from('Results')
      .insert([{ 
        QUIZ: "Slovencina", 
        CorrectAnswers: numCorrect, 
        IncorrectAnswers: numIncorrect, 
      }]);
    if (error) throw error;
    alert("Score saved successfully!");
  } catch (error) {
    console.log(error.message);
    alert(error.message);
  }
};


export default QuizScore;