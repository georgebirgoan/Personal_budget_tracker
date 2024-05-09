import './totals.scss';
import { useSelector } from 'react-redux';

export default function Totals() {
  const {totalIncome}=useSelector(state=>state.income)
  const {totalExpense}=useSelector(state=>state.expense)




  return (
    <div className='total'>
        <div className='totalGroup'>
                <div className='income'>
                    <span>Total income</span>
                    <span>$ {totalIncome}</span>
                </div>  
                <div className='expense'>
                    <span>Total expense</span>
                    <span>$ {totalExpense}</span>
                </div>  

                
        </div>

        <div className='balance'>
            <span>Total balance</span>
            <span>$ 2354</span>
        </div>  
    </div>
  )
}
