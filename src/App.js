import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/molecules/Navbar';
import {
  DashboardPage,
  MovieDetailPage,
  PersonDetailPage,
  SearchPage,
  TVDetailPage
} from './pages';
import NotFound from './pages/NotFound';

function App() {
  return (

    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/movie/detail/:id" element={<MovieDetailPage />} />
        <Route path="/tv/detail/:id" element={<TVDetailPage />} />
        <Route path="/person/detail/:id" element={<PersonDetailPage />} />
        <Route path="/search/:query" element={<SearchPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
