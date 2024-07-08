import './totals.scss';
import { useSelector } from 'react-redux';
import profit from '../../images/profit.png'
import up from '../../images/up.png'
import downtrend from '../../images/downtrend.png'
import moneyLose from '../../images/lose.png'
import gross from '../../images/gross.png'
import debt from '../../images/debt.png'
import target from '../../images/target.png'


export default function Totals() {
  const {totalIncome}=useSelector(state=>state.income)
  const {totalExpense}=useSelector(state=>state.expense)

  const TotalBalance=totalIncome-totalExpense;

  console.log(TotalBalance);
  console.log(totalIncome);


  return (
    <div className='total'>
        <div className='totalGroup'>

        
                <div className='Eachbox'>
                      <div className="logo">
                        <img src={profit} alt='income'/>
                      </div>

                    <div className="mijloc">
                      <span>Total income</span>
                      <span>$ {totalIncome}</span>
                    </div>
                    
                    <div className="grafic">
                      <img src={up} alt='grow'/>
                    </div>
                </div> 



                {/*Expense */}
                <div className='Eachbox'>
                      <div className="logo">
                        <img src={moneyLose} alt='income'/>
                      </div>

                    <div className="mijloc2">
                      <span>Total expenses</span>
                      <span>$ {totalExpense}</span>
                    </div>
                    
                    <div className="grafic">
                      <img src={downtrend} alt='grow'/>
                    </div>
                </div>  

                
                      {/*Balance */}
                      <div className='Eachbox'>
                      <div className="logo">
                        <img src={gross} alt='balance'/>
                      </div>

                    <div className="mijloc3">
                      <span>Total balance</span>
                      <span>$ {TotalBalance()}</span>
                    </div>
                    
                    <div className="grafic">
                      <img src={debt} alt='balance'/>
                    </div>
                </div> 
              

               {/*Goals */}
               <div className='Eachbox'>
                      <div className="logo">
                        <img src={gross} alt='goals'/>
                      </div>

                    <div className="mijloc3">
                      <span>Last budget goals</span>
                      <span>$ </span>
                    </div>
                    
                    <div className="grafic">
                      <img src={target} alt='goals'/>
                    </div>
                </div> 
               




             
                
        </div>

       
    </div>
  )
}
