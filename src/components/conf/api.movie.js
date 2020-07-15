import * as axios from 'axios';


export const apiMovieMap = (m) => ({
  img: 'https://image.tmdb.org/t/p/w500' + m.poster_path,
  title: m.title,
  details:m.release_date + ' | ' + m.vote_average + '/10 (' + m.vote_count + ')',
  description: m.overview
})

const apiMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/4'
})



apiMovie.interceptors.request.use( req => {
  req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjViOWJkYzM4YmIyOTE2MzYwODVhNzNiNTdlNmMyNiIsInN1YiI6IjVlZDY5YTYxMDM5OGFiMDAyMWQwNGM1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B1Q3Qiy0CQuig0l06O7SeL6cF_Q5umszVQ4G8LJcwFA'
  return req;
})

export default apiMovie;

