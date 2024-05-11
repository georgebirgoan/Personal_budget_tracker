import './chart.scss'
import chartImg from '../../images/chart.png';

export default function Chart() {
  return (
    <div className='chart'>
      
        <div className='top'>
            <h1>All transactions</h1>
        </div>

        <div className="bottom">
           <img src={chartImg} alt='chart'/>
        </div>
    </div>
  )
}
