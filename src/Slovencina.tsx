import React, { useEffect, useState } from 'react';
import Supabase from '@supabase/supabase-js';
import { slovencinaQuestions } from './supabase/supabaseClient';


const Slovencina = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const questions = [
    {
      question: 'Koľko vzorov má mužský rod?',
      options: [5, 3, 1, 4,],
      correctAnswer: 4,
    },
  ];

  useEffect(() => {
    const {data, error} = slovencinaQuestions()
  }, [])

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  }

  return (
    <>
    <div className="button-container"></div>
      <div className="sjl-nadpis">Quiz Slovenčina</div>

      {currentQuestion < questions.length && (
        <>
        <div className="sjl-otazka"> 
          <h2 className="sjl-txtotazka">{questions[currentQuestion].question}</h2>
        </div>
            {questions[currentQuestion].options.map((option) => (
              <div className="">
              <button onClick={() => handleAnswer(option)}>{option}</button>
              </div>
            ))}
        </>
      )}
      {currentQuestion === questions.length && <h2>Your score: {score} / {questions.length}</h2>}
    </>
  );
}

export default Slovencina;
        
    