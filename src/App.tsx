import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/components/Home';
import { MonthStatistics } from './Pages/MonthStatistics/MonthStatistics/MonthStatistics';
import Header from './shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/month-satistics' element={<MonthStatistics/>}/>
      </Routes>
     qwerty
    </div>
  );
}

export default App;
