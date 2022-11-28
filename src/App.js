
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import RegisterReactBoostrap from "./RegisterReactBoostrap";

import Main from './Layout/Main';
import Login from './component/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children: [
        {
             path:'/',
             element:<RegisterReactBoostrap></RegisterReactBoostrap>
        },
        {
          path:'/register',
          element: <RegisterReactBoostrap></RegisterReactBoostrap>
     },
     {
      path:'/login',
      element: <Login></Login>
 }



      ]
    }
  ])


  return (
    <div className="">
     <RouterProvider router={router}></RouterProvider>
          
    </div>
  );
}

export default App;
