import { Route, Routes } from 'react-router-dom';
import './App.css';
import DashboardPage from './pages/Dashboard';
import DetailMoviePage from './pages/DetailMovie';
import Navbar from './components/molecules/Navbar';

function App() {
  return (

    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/detail/:id" element={<DetailMoviePage />} />
      </Routes>
    </div>
  );
}

export default App;
