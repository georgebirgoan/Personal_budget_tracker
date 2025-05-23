import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';


const PrivateRoutes = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const { currentUser } = useSelector(state => state.user);

  useEffect(() => {
      setLoading(false);
  }, []);

  if (loading) {
    return <Spinner />; // Afișează ecranul de încărcare
  }

  if (!currentUser) {
    console.log('ajuge in protec')
    return <Navigate to="/"  />;

  }
  return children ? children : <Outlet />;
};

export default PrivateRoutes;
