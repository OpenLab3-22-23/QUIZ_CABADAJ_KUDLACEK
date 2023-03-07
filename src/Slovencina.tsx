import React, { useEffect, useState } from 'react';
import Supabase from '@supabase/supabase-js';
import { slovencinaQuestions, supabase } from './supabase/supabaseClient';
import Loading from './Loading';
import QuizScore from './QuizScore';

const Slovencina = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [numCorrect, setNumCorrect] = useState(0);
  const [numIncorrect, setNumIncorrect] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false); 
  
  const [answer1, setAnswer1] = useState("");

 useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 600);
    supabase
      .from('slovencina')
      .select()
      .then((data) => {
        setQuestions(data.data);
      });
  }, []);

  const handleAnswer = (e, answer) => {
    const clickedAnswer=e.target;
    if (answer === questions[currentQuestion].correctAnswer) {
      clickedAnswer.classList.add('animate-correct');
      const timer = setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1)
        setNumCorrect(numCorrect + 1);
        setScore(score + 1);
        clickedAnswer.classList.remove('animate-correct');
      }, 1000);
      return () => clearTimeout(timer);
    } 
    else {
      clickedAnswer.classList.add('animate-incorrect');
      const timer = setTimeout(() => {
        setNumIncorrect(numIncorrect + 1);
        setCurrentQuestion(currentQuestion + 1);
        if (currentQuestion + 1 < questions.length) {
        } else {
          setQuizEnded(true);
        }
        clickedAnswer.classList.remove('animate-incorrect');
      }, 1000);
      return () => clearTimeout(timer);
    }
  };

  return (
    <>
      {loading && <Loading />}
      {quizEnded ? (
        <QuizScore
          score={score}
          numCorrect={numCorrect}
          numIncorrect={numIncorrect}
          totalQuestions={questions.length}
        />
      ) : (
        <>
          <div className="quiz-nadpis">Quiz Slovenčina</div>
          {currentQuestion < questions.length && (
            <>
              <div className="quiz-otazka">
                <h2 className="quiz-txtotazka">{questions[currentQuestion].question}</h2>
              </div>
              <div className="button-container-questions">
                <div className="button-row">
                  <button
                    className="quiz-odpoved1 quiz-txtodpoved1"
                    onClick={(e) => handleAnswer(e, questions[currentQuestion].option1)}
                  >
                  {questions[currentQuestion].option1}
                  </button>
                  <button
                    className="quiz-odpoved2 quiz-txtodpoved2" 
                    onClick={(e) => handleAnswer(e, questions[currentQuestion].option2)}
                  >
                    {questions[currentQuestion].option2}
                  </button>
                </div>
  
                <div className="button-row">
                  <button
                    className="quiz-odpoved3 quiz-txtodpoved3"
                    onClick={(e) => handleAnswer(e, questions[currentQuestion].option3)}
                  >
                    {questions[currentQuestion].option3}
                  </button>
                  <button
                    className="quiz-odpoved4 quiz-txtodpoved4"
                    onClick={(e) => handleAnswer(e, questions[currentQuestion].option4)}
                  >
                    {questions[currentQuestion].option4}
                  </button>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}
  

export default Slovencina;