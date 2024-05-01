import { Link } from 'react-router-dom';
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PaidIcon from '@mui/icons-material/Paid';
import grow from '../../images/grow1.png'
import expense from '../../images/expens.png'

export default function SideBar() {
  return (
    <div className='sidebar'>
        <div className='top'>
          <span className='logo'>Tracker logo</span>
        </div>

      <hr/>
  

        <div className='center'>
            <ul>
              <p className='title'>Your service</p>
              <li >
                <DashboardIcon className='icon1'/>
                <Link to={'/'}>Dashboard</Link>
              </li>
      
              <li>
                <PaidIcon className='icon2'/>
                <Link to={'/transaction'}>Transaction</Link>
              </li>

              <li>
              <img className='icon3' src={grow} width={"25px"} height="23px" alt="Grow Icon" />
              <Link to={'/income'}>Income</Link>
              </li>

              <li >
                <img className='icon4' src={expense} alt='expense'  width={"25px"} height="25px" />
                <Link to={'/expenses'}>Expenses</Link>
              </li>
            </ul>
        </div>



        <div className='bottom'>

 

        
       
          <div className='containerColor'>
            <span>Change color</span>
          <div className='groupColors'>
            <div className='colorOption'></div>
            <div className='colorOption'></div>
          </div>
          </div>
      

        </div>
        

    </div>
  )
}

