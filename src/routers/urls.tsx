import {Navigate, Outlet} from 'react-router-dom';
import NotFound from 'pages/not-found';
import DashBoard from '../pages/DashBoard';
import Layout from 'layout';
import Users from 'pages/Users';

/* We should pass <Outlet /> to render the children */

const routes = (isLoggedIn: boolean) => [
  {
    path: '/',
    element: !isLoggedIn ? <Outlet /> : <Navigate to="/" />,
    children: [
      {path: 'login', element: <h1>Login</h1>},
      {path: '', element: <h1>Login</h1>},
    ],
  },
  {
    path: '/',
    element: isLoggedIn ? (
      <Layout>
        <Outlet />
      </Layout>
    ) : (
      <Navigate to="/login" />
    ),
    children: [
      {path: '', index: true, element: <DashBoard />},
      {path: 'users', element: <Users />},
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
