import React, { useState, useEffect } from 'react';
import Supabase from '@supabase/supabase-js';
import { supabase } from './supabase/supabaseClient';

const Results = () => {
    const [results, setResults] = useState([]);
  
    useEffect(() => {
      const getResults = async () => {
        const { data, error } = await supabase
          .from('Results')
          .select('*');
  
        if (error) console.log('Chyba při načítání dat:', error);
  
        setResults(data);
      }
  
      getResults();
    }, []);
  
    return (
      <div>
        <h2 className="quiz-nadpis">Moje výsledky</h2>
        <table className="results-table">
          <thead>
            <tr>
              <th>SCORE</th>
              <th>CORRECT ANSWERS</th>
              <th>INCORRECT ANSWERS</th>
              <th>QUIZ NAME</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr key={result.score}>
                <td>{result.score}</td>
                <td>{result.correct_answers}</td>
                <td>{result.incorrect_answers}</td>
                <td>{result.quiz_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default Results;