import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import { MonthStatistics } from './Pages/MonthStatistics/MonthStatistics/MonthStatistics';
import Header from './shared/Header/Header';
// import { Popup } from './shared/Popup/Popup';

function App() {
  return (
    <div className="global-container">
      {/* <Popup/> */}
    <div className="container">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/month-satistics' element={<MonthStatistics/>}/>
      </Routes>
    </div>
    </div>
  );
}

export default App;
