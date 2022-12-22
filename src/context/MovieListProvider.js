import { createContext, useState } from 'react';

//created a context, with createContext api
export const movieListContext = createContext();

const MovieListProvider = (props) => {
    // this state will be shared with all components //API
    const [movieList, setMovieList] = useState([]);
    // this state is to persist the original list
    const [defaultList, setDefaultList] = useState([]);
    return (
        // this is the provider providing state
        <movieListContext.Provider value={{defaultList, setDefaultList, movieList, setMovieList}}>
            {props.children}
        </movieListContext.Provider>
    );
};

export default MovieListProvider;
