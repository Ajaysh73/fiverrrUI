import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Gigs from './pages/gigs/Gigs';
import MyGigs from './pages/myGigs/MyGigs';
import Orders from './pages/orders/Orders';
import Messages from './pages/messages/Messages';
import Message from './pages/message/Message';
import Add from './pages/add/Add';
import Gig from './pages/gig/Gig';
import Home from './pages/home/Home';
import './app.scss';

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/gigs',
        element: <Gigs />,
      },
      {
        path: '/gig/:id',
        element: <Gig />,
      },
      {
        path: '/orders',
        element: <Orders />,
      },
      {
        path: '/mygigs',
        element: <MyGigs />,
      },
      {
        path: '/add',
        element: <Add />,
      },
      {
        path: '/messages',
        element: <Messages />,
      },
      {
        path: '/message/:id',
        element: <Message />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
