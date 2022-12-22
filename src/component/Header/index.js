import React, { useContext, useRef, useEffect ,useState} from 'react';
import { NavLink } from 'react-router-dom'
import {FaSearch,FaHtml5} from 'react-icons/fa'
import { movieListContext } from '../../context/MovieListProvider';

const Header = ()=> {
  const searchRef = useRef();
  const { defaultList, setMovieList } = useContext(movieListContext);
  const handleOnChange = () => {
    const searchTerm = searchRef.current.value.toLowerCase();
    const filterList = defaultList.filter((v) => v.title.toLowerCase().includes(searchTerm));
    setMovieList(filterList);
  }

  return (
    <header className="header">
      <nav aria-labelledby="sections-heading">
        <ul>
          <li><FaHtml5/></li>
          <li><NavLink to={'/'} className="navbar-item">Popular</NavLink></li>
          <li><NavLink to={'/upcoming'} className="navbar-item">Upcoming</NavLink></li>
        </ul>
      </nav>
    <div>
      <div className='searchBox'>
      <form id="search" role="search" aria-label="Search from here">
        <input 
          ref={searchRef}
          onChange= {handleOnChange}
          aria-label="" type="search"
          aria-required="true"
          name="search"
          placeholder="Search"
        />
        <button type="submit"><FaSearch/></button>
        </form>
      </div>
    </div>
 </header>
  );
}
export default Header;