import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../../pages/home/Home';
import Community from '../../pages/community/Community';
import Profile from '../../pages/profile/Profile';
import Settings from '../../pages/settings/Settings';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/community',
        element: <Community />,
      },
      {
        path: '/profile/:id',
        element: <Profile />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
      {
        path: '*',
        element: (
          <div
            style={{
              textAlign: 'center',
              fontWeight: 500,
              fontSize: '24px',
              marginTop: '50px',
            }}
          >
            A venir
          </div>
        ),
      },
    ],
  },
]);

export default Router;
