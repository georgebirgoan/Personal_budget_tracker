import React from 'react';
import { useLocation } from 'react-router-dom';
import './footer.scss';

export default function Footer() {
  const location = useLocation();
  const { pathname } = location;

  const displayFooter = pathname === '/' || pathname === '/income' || pathname === '/expense';

  return (
    displayFooter && (
      <div className="footer">
        <span>Budget Tracker</span>
        <span>@Admin Dashboard George</span>
      </div>
    )
  );
}
