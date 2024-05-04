import { useSelector } from 'react-redux';
import './history.scss';

export default function History() {

   
  return (
    <div className='historyContainer'>
      
      <div className='top'>
          Recent History 
      </div>

      <div className='groupHistory'>
          <div className="history">
          </div>

          <div className="history">
            <span>al doilea history</span>
            <span>price</span>
          </div>

          <div className="history">
            <span>al treilea history</span>
            <span>price</span>
          </div>

          <div className="history">
            <span>al patrulea history</span>
            <span>price</span>
          </div>

          
      </div>


    </div>
  )
}
