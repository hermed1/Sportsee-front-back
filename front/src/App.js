import { RouterProvider } from 'react-router-dom';
import './App.css';
import Router from './components/router/Router';
function App() {
  return (
    <div className='App'>
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
