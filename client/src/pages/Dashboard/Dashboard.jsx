import Chart from '../../components/chart/Chart'
import History from '../../components/history/History'
import './dashboard.scss'
import ChartBox from '../../components/chartBox/ChartBox'
import { useSelector } from 'react-redux'
import { MyComponent } from '../../utils/data'


function Dasboard() {
  const {chartBoxIncome,chartBoxExpense,chartBoxBalance,chartBoxEconomy}=MyComponent();
  

  return (
    <div className='home'>
    
      

      <div className="box box2">
        <ChartBox
        {...chartBoxIncome}/>
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
        Chart
      </div>

      <div className="box box4">
        <History/>
      </div>

    
      <div className="box box7">Box7</div>
    </div>
     
  )
}

export default Dasboard
