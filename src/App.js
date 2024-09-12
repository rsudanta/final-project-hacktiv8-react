import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/molecules/Navbar';
import {
  CollectionDetailPage,
  DashboardPage,
  MovieDetailPage,
  PersonDetailPage,
  SearchPage,
  TVDetailPage,

} from './pages';

function App() {
  return (

    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/movie/detail/:id" element={<MovieDetailPage />} />
        <Route path="/tv/detail/:id" element={<TVDetailPage />} />
        <Route path="/person/detail/:id" element={<PersonDetailPage />} />
        <Route path="/collection/detail/:id" element={<CollectionDetailPage />} />
        <Route path="/search/:query" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
