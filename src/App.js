import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

import './App.css'
import searchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com?apikey=1fba06d8'

const App = () => {
  const [movies, setMovies] = useState([])
  const [searchfilm, setSearchFilm] = useState('')  

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)
  }


  useEffect(() => {
    searchMovies('Iron man')
  }, [])
  return (
    <>
      <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
          <input placeholder="Search for a movie " value={searchfilm} onChange={(e) => setSearchFilm(e.target.value)} />
          <img alt="Search" src={searchIcon} onClick={() => searchMovies(searchfilm)} />
        </div>

        {movies?.length > 0 ? (
          <div className="container">
           {
            movies?.map((movie) => {
                <MovieCard movie={movie} />
            })
           }
          </div>
        ) : (
          <>
            <div className='empty'>
                <h2> No movies found </h2>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default App
