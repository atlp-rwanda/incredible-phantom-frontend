import React from 'react';
import Drivers from './drivers/Drivers';
import Roles from './roles/Roles';
import Buses from './buses/Buses';
import Routes from './routes/Routes';
import Profile from './profile/Profile';
import Operator from './operators/Operator';


localStorage.setItem('pageToRender', 'drivers');
export const ComponentToRender = () => {
  const page = localStorage.getItem('pageToRender');
  return page === 'drivers' ? (
    <Drivers />
  ) : page === 'roles' ? (
    <Roles />
  ) : page === 'routes' ? (
    <Routes />
  ) : page === 'buses' ? (
    <Buses />
  ) : page === 'operators' ? (
    <Operator />
  ) : page === 'profile' ? (
    <Profile />
  ) : page === 'assignDriver' ? (
    <AssignDriver />
  ) : (
    <Drivers />
  );
};