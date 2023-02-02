import React, { useEffect, useState } from 'react';
import Supabase from '@supabase/supabase-js';
import { slovencinaQuestions, supabase } from './supabase/supabaseClient';


const Slovencina = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    supabase
      .from('slovencina')
      .select()
      .then((data) => {
        setQuestions(data.data);
      });
  }, []);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <>
      <div className="button-container"></div>
      <div className="sjl-nadpis">Quiz Slovenčina</div>

      {currentQuestion < questions.length && (
        <>
          <div className="sjl-otazka">
            <h2 className="sjl-txtotazka">{questions[currentQuestion].question}</h2>
          </div>
          {[questions[currentQuestion].option1, 
            questions[currentQuestion].option2, 
            questions[currentQuestion].option3, 
            questions[currentQuestion].option4].map((option) => (
            <div className="">
              <button onClick={() => handleAnswer(option)}>{option}</button>
            </div>
          ))}
        </>
      )}
      {currentQuestion === questions.length && <h2>Your score: {score} / {questions.length}</h2>}
    </>
  );
};

export default Slovencina;