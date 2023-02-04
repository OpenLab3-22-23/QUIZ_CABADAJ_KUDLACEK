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
      <div className="quiz-nadpis">Quiz Slovenčina</div>
      <div className="points">
        <h2 className="quiz-points">{score} / {questions.length}</h2>
      </div>

      {currentQuestion < questions.length && (
        <>
          <div className="quiz-otazka">
              <h2 className="quiz-txtotazka">{questions[currentQuestion].question}</h2>
            </div>
            <div className="button-container-questions">
            <div className="button-row">

              <button
                className="quiz-odpoved1 quiz-txtodpoved1"
                onClick={() => handleAnswer(questions[currentQuestion].option1)}
              >
               A: {questions[currentQuestion].option1}
              </button>

              <button
                className="quiz-odpoved2 quiz-txtodpoved2"
                onClick={() => handleAnswer(questions[currentQuestion].option2)}
              >
               B: {questions[currentQuestion].option2}
              </button>
            </div>

            <div className="button-row">
              <button
                className="quiz-odpoved3 quiz-txtodpoved3"
                onClick={() => handleAnswer(questions[currentQuestion].option3)}
              >
               C: {questions[currentQuestion].option3}
              </button>
              <button
                className="quiz-odpoved4 quiz-txtodpoved4"
                onClick={() => handleAnswer(questions[currentQuestion].option4)}
              >
               D: {questions[currentQuestion].option4}
              </button>
            </div>
            </div>
        </>
      )}
    </>
  );
};

export default Slovencina;