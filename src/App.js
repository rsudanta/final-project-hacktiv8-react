import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/molecules/Navbar';
import {
  DashboardPage,
  MovieDetailPage,
  SearchPage
} from './pages';
import NotFound from './pages/NotFound';
import Watchlist from './pages/Watchlist';

function App() {
  return (

    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/movie/detail/:id" element={<MovieDetailPage />} />
        <Route path="/search/:query" element={<SearchPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
