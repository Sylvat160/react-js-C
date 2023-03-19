import React, {useEffect} from "react";


const API_URL = 'http://www.omdbapi.com?apikey=1fba06d8'

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()

        console.log(data)
    }

    useEffect(() => {
        searchMovies('Iron man')
    }, [])
    return (
        <>
        <h1>
            Hello react
        </h1>
        </>
    )
}

export default App