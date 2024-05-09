import MinMax from '../../components/MinMax/MinMax'
import Chart from '../../components/chart/Chart'
import History from '../../components/history/History'
import Navbar from '../../components/navbar/Navbar'
import SideBar from '../../components/sidebar/SideBar'
import Totals from '../../components/totals/Totals'
import './home.scss'
import { useSelector } from 'react-redux'


function Home() {
    
  

  return (
    <div className='home'>
      <SideBar/>
        <div className="homeContainer">
          <Navbar/>
        
            <div className='chartHist'>
              <Chart/>
              <History/>
            </div>
      
            <div className='totalMin'>
              <Totals/>
              <MinMax/>
            </div>

        </div>
    </div>
  )
}

export default Home
