import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import Routing from './route/Routing.js';


function App() {
  return (
    
     <RouterProvider router={Routing}>
     </RouterProvider>
     
  );
 
}

export default App;
