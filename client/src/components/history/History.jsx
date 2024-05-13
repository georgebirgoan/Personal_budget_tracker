import { useState, useEffect } from 'react';
import './history.scss';
import { Istoric } from '../helper/Istoric';

export default function History() {
  const istoric = Istoric(); // Inițializează istoricul cu cele mai recente 4 tranzacții
 
  // Efect pentru adăugarea unei noi tranzacții la încărcarea componentei

  
  return (
    <div className='historyContainer'>
      <div className='top'>
        Recent History 
      </div>

      <div className='groupHistory'>
        {/* Verifică dacă istoricul este gol */}
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
