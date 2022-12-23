import * as React from 'react';
import {FaStar,FaClock} from 'react-icons/fa'

export default function MovieList({url, vote, click,id,title}) {

  return (
      <article key={id} className='listContainer--item' onClick={click} aria-haspopup="dialog">
        <img src={url} alt={title} />
        <div className='itemInfo'>
          <div>
          <span><FaStar/> {vote}</span>
          {/* <span><FaClock/> 2h 20m</span> */}
        </div>
      </div>
      </article>
  );
}
