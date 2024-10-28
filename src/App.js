import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './component/Dashboard';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/dashboard",
      element: <Dashboard />
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
