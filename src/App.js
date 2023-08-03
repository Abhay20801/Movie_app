import Movielist from './Movielist';
import Navbar from './Navbar';
import React from 'react';
import { movies } from "./moviesData";

class App extends React.Component {
  constructor() {

    super();
    this.state = {
      movies: movies,
      cartCount: 0
    }

  }


  handIncStar = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    if (movies[mid].star >= 5) {
      return;
    }
    movies[mid].star += 0.5;
    this.setState({
      // movies:movies
      // Above line can be shortly written as 
      movies
    })
  }

  // Handle decreasing stars
  handDecStar = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    if (movies[mid].star <= 0) {
      return;
    }
    movies[mid].star -= 0.5;
    this.setState({
      // movies:movies
      // Above line can be shortly written as 
      movies
    })
  }

  handFav = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;
    this.setState({
      movies
    })
  }

  handleToggleCart = (movie) => {
    let { movies, cartCount } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].cart = !movies[mid].cart;

    if (movies[mid].cart) {
      cartCount = cartCount + 1;
    } else {
      cartCount -= 1;
    }
    this.setState({
      movies,
      cartCount
    })
  }
  render() {
    const { movies, cartCount } = this.state;

    return (
      <>
        <Navbar cartCount={cartCount} />
        <Movielist movies={movies}
          addStars={this.handIncStar}
          decStars={this.handDecStar}
          handFav={this.handFav}
          toggleCart={this.handleToggleCart} />
      </>
    );
  }
}

export default App;
