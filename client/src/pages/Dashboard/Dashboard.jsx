import MinMax from '../../components/MinMax/MinMax'
import Chart from '../../components/chart/Chart'
import History from '../../components/history/History'
import Navbar from '../../components/navbar/Navbar'
import SideBar from '../../components/sidebar/SideBar'
import Totals from '../../components/totals/Totals'
import './dashboard.scss'
import Income from '../Income/Income';
import ChartBox from '../../components/chartBox/ChartBox'

function Dasboard() {
    
  

  return (
    <div className='home'>
      <div className="box box1">
        <Chart/>
      </div>
      <div className="box box"><ChartBox/>
      </div>

      <div className="box box3"><ChartBox/></div>
      <div className="box box4"></div>
      <div className="box box5"><ChartBox/></div>


      <div className="box box6"><ChartBox/></div>
      <div className="box box7">Box7</div>
    </div>
     
  )
}

export default Dasboard
