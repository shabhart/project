import React, { useEffect , useState, useContext } from 'react';
import { movieListContext } from '../context/MovieListProvider';
import movies from '../services';
import { URL_IMG, IMG_SIZE_LARGE} from '../constant';

import MovieList from '../component/MoviList';
import Modal from '../component/Modal';

const Popular = () => {
    const { setDefaultList, movieList, setMovieList } = useContext(movieListContext);
    const [movieDetail,setMovieDetail]= useState({})
    const [open, setOpen] = useState(false);

    useEffect(() => {
        movies.getPopularMoviesList((res) => {
        setMovieList(res.data);
        setDefaultList(res.data);
        })
    },[])

  const onOpenModal = (movieId) => {
    movies.getMovieDetail(movieId,(res) => {
      setMovieDetail(res)
      setOpen(true);
    })
  }

  const onCloseModal = () => {
    setMovieDetail({})
    setOpen(false);
  }

    return (
      <div className='listContainer'>
       
          {movieList.map((v) => {
              return  <MovieList key={v.id} click={()=>onOpenModal(v.id)}
              url={URL_IMG+IMG_SIZE_LARGE+v.poster_path} 
              vote={v.vote_average}
              id={v.id}
              title={v.title}
              />
          })}
          {movieDetail && open ? 
          <Modal data={movieDetail} onCloseModal={ onCloseModal }/> :''}
        
      </div>
    );
}
export default Popular;