import { Link } from "react-router-dom";
import "./sidebar.scss";
import { menu } from "../../utils/data";

const Sidebar = () => {
  return (
    <div className="menu">
      {menu.map((item) =>
        item.listItems ? (
          <div className="item" key={item.id}>
            <span className="title">{item.title}</span>
            {item.listItems.map((listItem) => (
              <Link
                to={listItem.url}
                className="listItem"
                key={listItem.id}
              >
                <img src={listItem.icon} alt="" />
                <span className="listItemTitle">{listItem.title}</span>
              </Link>
            ))}
          </div>
        ) : (
          <Link
            to={item.url}
            className="listItem sign-out" // Aplicăm clasa 'sign-out' doar pentru 'Sign Out'
            key={item.id}
          >
            <img src={item.icon} alt="" />
            <span className="listItemTitle">{item.title}</span>
          </Link>
        )
      )}
    </div>
  );
};

export default Sidebar;
