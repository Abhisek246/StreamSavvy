import React from 'react'
import GenresList from './../Constant/GenresList.jsx'
import MovieList from './MovieList.jsx'

function GenreMovieList() {
  return (
    <div>
        {GenresList.genre.map((item, index)=>( index<=4 &&
            <div key={index} className='p-8 md:px-20'>
                <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
                <MovieList genreId={item.id} index_={index}/>
            </div>
        ))}
    </div>
  )
}
export default GenreMovieList


