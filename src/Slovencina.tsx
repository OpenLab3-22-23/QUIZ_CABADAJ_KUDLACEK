import React, { useState } from 'react';

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
              <button className="answer " onClick={() => handleAnswer(option)}>{option}</button>
            ))}
        </>
      )}
      {currentQuestion === questions.length && <h2>Your score: {score} / {questions.length}</h2>}
    </>
  );
}

export default Slovencina;
        
        
