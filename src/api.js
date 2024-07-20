import axios from "axios"

const baseURL = process.env.REACT_APP_BASEURL
const apiKey = process.env.REACT_APP_APIKEY

export const getMovieList = async () => {
     const movie = await axios.get(
        `${baseURL}/movie/popular?page=1&api_key=${apiKey}`
    )
    return movie.data.results
}

export const searchMovie = async(query) => {
    const search = await axios.get(
        `${baseURL}/search/movie?query=${query}&page=1&api_key=${apiKey}`
    )
    return search.data
}