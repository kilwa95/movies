import React, { Component } from "react";
import { Header } from "./components";
import apiMovie, { apiMovieMap }  from './components/conf/api.movie';
import Films from './features/filmes';
import Favoris from './features/favories';
import { BrowserRouter as Router,Route ,Switch ,Redirect} from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false
    };

  }

  updateSelectedMovie = index => {
    this.setState({
      selectedMovie: index
    });
  };

  componentDidMount() {
    apiMovie.get('/discover/movie')
      .then( response => response.data.results )
      .then( moviesApi => {
        const movies = moviesApi.map(apiMovieMap);
        this.updateMovies(movies);
      })
      .catch( err => console.log(err));
  }



  updateMovies = (movies) => {
    this.setState({
      movies,
      loaded: true
    })
  }

  render() {
    return (
      <Router>
      <div className="App d-flex flex-column">
        <Header />
        <Switch>
          <Route path="/films" render={ (props) => {
            return(
              <Films 
              { ...props } 
              loaded = {this.state.loaded}
              updateMovies = {this.updateMovies}
              updateSelectedMovie = {this.updateSelectedMovie}
              movies = {this.state.movies}
              selectedMovie = {this.state.selectedMovie}
              />
            )
          }} />
          <Route path="/favoris"  component={ Favoris}/>
          <Redirect to="/films" />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
