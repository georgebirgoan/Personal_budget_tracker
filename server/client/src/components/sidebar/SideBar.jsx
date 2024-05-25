import { Link } from "react-router-dom";
import "./sidebar.scss";
import {menu} from '../../utils/data'
import CsvData from "../CSV/CsvData";

const Sidebar = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
    
          {item.listItems.map((listItem) => (
           
            <Link to={listItem.url} className="listItem" key={`${item.id}`}>
  
              <img src={listItem.icon} alt="" />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
      
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;