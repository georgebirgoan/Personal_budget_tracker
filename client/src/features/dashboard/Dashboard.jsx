import Chart from '../../components/chart/Chart'
import History from '../../components/history/History'
import './dashboard.scss'
import ChartBox from '../../components/chartBox/ChartBox'
import { MyComponent } from '../../utils/data'
import { MaxExpense, MaxSal, MinExpense, MinSal } from "../../helper/Istoric"
import Chart2 from '../../components/Chart2/Chart2'
import { useDispatch } from 'react-redux'
import { resetState } from '../../redux/cart/IncomeReducer'


function Dasboard() {
  const {chartBoxIncome,chartBoxExpense,chartBoxBalance,chartBoxEconomy}=MyComponent();
  //const dispatch=useDispatch();
 // dispatch(resetState());


  return (
    <div className='home'>

      <div className="box box2">
        <ChartBox
          {...chartBoxIncome}
        />
      </div>

      <div className="box box3">
        <ChartBox
          {...chartBoxExpense}
          />
      </div>

      <div className="box box5"><ChartBox
      {...chartBoxBalance}
      /></div>

      <div className="box box6"><ChartBox
        {...chartBoxEconomy}
      />
      </div>

      <div className="box box1">
        <Chart/>
      </div>

      <div className="box box4">
        <History/>
      </div>

    
      <div className="box box7">

          <div className="salar">
            <div className="titleSalary">
              <span>Min</span>
              <span>Salary</span>
              <span>Max</span>
            </div>

            <div className="MinMaxSal">
              <span><MinSal/>$</span>
              <span><MaxSal/>$</span>
            </div>

          </div>

      <div className="cheltuieli">
          <div className="titleExpense">
            <span>Min</span>
            <span>Expense</span>
            <span>Max</span>
          </div>

          <div className="MinMaxExpense">
            <span><MinExpense/>$</span>
            <span><MaxExpense/>$</span>
          </div>
        </div>

      </div>

      <div className="box box8"><Chart2/> </div>
    </div>
     
  )
}

export default Dasboard
