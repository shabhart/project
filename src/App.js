import {Routes,Route} from 'react-router-dom'

import './App.scss';
import Popular from './pages/popular'
import Upcoming from './pages/upcoming'
import Layout from './component/Layout'
import MovieListProvider from './context/MovieListProvider';


function App() {
  return (
    <MovieListProvider>
      <Layout>
        <Routes>
          <Route path="/" element={ <Popular/> } />
          <Route path="upcoming" element={ <Upcoming/> } />
        </Routes>
      </Layout>
    </MovieListProvider>
  );
}

export default App;
