import { useState } from 'react';
import './App.css';
import SetHome from './pages/startPage'
import HomePage from './pages/homePage';


function App() {
  const [page, setPage] = useState('start')
  return (
    <div className="App">
      {page === 'start'?
      (
        <SetHome setPage={setPage}/>
      )
      :
      (
        <HomePage setPage={setPage}/>
      )
    }
      </div>
  );
}

export default App;
