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
    console.log(clickedAnswer);
    if (answer === questions[currentQuestion].correctAnswer) {
      const timer = setTimeout(() => {
        {
            console.log("spravna odpoved");
            setCurrentQuestion(currentQuestion + 1)
        }
      }, 1000);
      {
        setNumCorrect(numCorrect + 1);
        setScore(score + 1);
      }
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        {
          console.log("nespravna odpoved");
          setNumIncorrect(numIncorrect + 1);
          setCurrentQuestion(currentQuestion + 1)
          if (currentQuestion + 1 < questions.length) {
          } else {
            setQuizEnded(true);
          }
        }
      }, 1000);
      {
        
      }
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
                    className={"quiz-odpoved1 quiz-txtodpoved1" + answer1}
                    onClick={(e) => handleAnswer(e, questions[currentQuestion].option1)}
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
      )}
    </>
  );
}
  

export default Slovencina;