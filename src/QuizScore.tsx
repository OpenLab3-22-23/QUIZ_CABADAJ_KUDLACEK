import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { supabase } from './supabase/supabaseClient';
import { useState } from 'react';



const QuizScore = ({ score, numCorrect, numIncorrect, totalQuestions, quizName }) => {
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
        <button className="results_button" onClick={() => saveScoreToDatabase(numCorrect, numIncorrect, score, quizName)}>SAVE RESULTS</button>
    </div>
    </div>
    </>
  );
};

const saveScoreToDatabase = async (numCorrect, numIncorrect, score, quizName) => {
  try {
    const { data, error } = await supabase
      .from('Results')
      .insert([{ 
        quiz_name: quizName,
        correct_answers: numCorrect, 
        incorrect_answers: numIncorrect, 
        score: score
      }]);
    if (error) throw error;
    alert("Score saved successfully!");
  } catch (error) {
    console.log(error.message);
    alert(error.message);
  }
};


export default QuizScore;