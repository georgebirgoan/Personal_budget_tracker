import './navbar.scss'
import SearchOutlineIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
    <div className='containerNav'>
      <div className='wrapper'>


      {/*search box */}
      <div class="search">
        <input type="text" className='inout' id="search" placeholder="Search for..." required/>
        <input type="submit" className='icon' value="go" id="submit"/>
      </div>



        
      <div className="items">
        <div className="item">
          <LanguageOutlinedIcon  className='icon'/>
          <span>English</span>
        </div>
        
        <div className="item">
          <DarkModeOutlinedIcon  className='icon'/>
        </div>


        <div className="item">
          <Link to="profile">
          <img src={"#"} alt='imagine' /> {/*imagine user */}
          </Link>
        </div>


      </div>
      </div>
    </div>
    <hr/>
    </>
  )
}
