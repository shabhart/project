import * as React from 'react';
import {FaStar,FaClock} from 'react-icons/fa'
import { URL_IMG, IMG_SIZE_POSTER,IMG_SIZE_LARGE} from '../../constant';
import {MdClose} from 'react-icons/md'

export default function Modal(props) {
    function toHoursAndMinutes(totalMinutes) {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`;
    }
      

   return(
    <div className='modal' role="dialog" aria-modal="true" 
     aria-labelledby="modal-title">
        <div>
            <button className='btn-close' onClick={()=> props.onCloseModal()} aria-label="Close"><MdClose/></button>
            <div className='movie-box'>
                <div className='movieImg-container'>
                    {props?.data?.tagline ? <p className='movie-tagline'>"{props?.data?.tagline}"</p> :''}
                    <picture>
                        <source 
                            media="(min-width: 650px)"
                            srcSet={URL_IMG+IMG_SIZE_POSTER+props?.data?.backdrop_path}/>
                        <source 
                            media="(min-width: 465px)"
                            srcSet={URL_IMG+IMG_SIZE_LARGE+props?.data?.backdrop_path}/>
                        <img 
                            src={URL_IMG+IMG_SIZE_LARGE+props?.data?.backdrop_path} 
                            alt={props?.data?.title}/>
                    </picture>
                </div>
                <div className='movie-details'>
                    <h2 className='movie-title'>{props?.data?.title}</h2>
                    <div className='movie-runtime'>
                        <span><FaStar/> {props?.data?.vote_average}</span>
                        <span><FaClock/> {toHoursAndMinutes(props?.data?.runtime)}</span>
                    </div>
                    <p>{props?.data?.overview}</p>
                    {/* <div className='movie-cast'>
                        <h4>Cast</h4>
                        <span>cast1</span>
                    </div> */}
                    {props?.data?.genres ? <div className='movie-genres'>
                        <h4>Genres</h4>
                        {props?.data?.genres?.map((genre) => { return <span>{genre.name}, </span>})}
                    </div>:''}
                </div>
            </div>
        </div>
    </div>
  )
}