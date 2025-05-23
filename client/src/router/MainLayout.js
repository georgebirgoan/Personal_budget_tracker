import Navbar from "../layouts/navbar/Navbar";
import Footer from '../layouts/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => (
  <div className="main">
    <Navbar />
    <div className="container">
      <div className="contentContainer">
        <Outlet />
      </div>
    </div>
    <Footer />
  </div>
);

export default MainLayout;
