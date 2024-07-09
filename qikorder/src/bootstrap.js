import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';

// App Main
import Main from 'features/Main';
import Menu from 'features/Menu';

// App base styles
import './index.scss';

// Router
const router = createHashRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/main/menu',
        element: <Menu />
      }
    ]
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
