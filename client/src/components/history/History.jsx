import { useState, useEffect } from 'react';
import './history.scss';
import {Istoric} from "../../helper/Istoric"

export default function History() {
  const istoric = Istoric(); 
 

  
  return (
    <div className='historyContainer'>
      <div className='top'>
        <span className='histSpan'>Recent History </span>
      </div>

      <div className="titleHist">
        <span className='categorie'>Category</span>
        <span className='pret'>Price</span>
      </div>

      <div className='groupHistory'>

        {istoric.length === 0 ? (
          // Afișează mesajul corespunzător în cazul în care istoricul este gol
          <div className="emptyHistoryMessage">Nu există înregistrări în istoric</div>
        ) : (
          // Iterează prin fiecare înregistrare din istoric și afișează-o
          istoric.map((item) => (
            <div className={`ist ${item.type === 'expense' ? 'red' : 'green'}`} key={item.id}>
              <span>{item.category}</span>
              <span>{item.type === 'expense' ? '-' : '+'} {item.amount} $</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
