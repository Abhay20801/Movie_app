import { Component } from "react";
import Moviecard from "./Moviecard";
class Movielist extends Component{
    constructor(){
        
        super();
        this.state = {
            movies : [
                {
                  title: 'The Avengers',                  
                  plot:
                    "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  rating: '8.0',            
                  price: 99,            
                  star: 0,
                  fav: false,
                  cart: false                  
                },
                {
                  title: 'The Dark Knight',                  
                  plot:
                    'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',                  
                  rating: '9.0',            
                  price: 199,            
                  star: 0,            
                  fav: false,
                  cart: false                  
                },
                {
                  title: 'Iron Man',                 
                  plot:
                    'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',                  
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',                  
                  rating: '7.9',            
                  price: 139,            
                  star: 0,            
                  fav: false,
                  cart: false                  
                }]
        }
         
    }
    // addStars=()=>{
    //     // Method 1
    //     // this.setState({
    //     //     stars: this.state.stars + 0.5
    //     // })

    //     // Method 2 of setstate , giving previous state as argumnet 
    //     if(this.state.star>=5){
    //         return;
    //     }

    //     this.setState({
    //         star : this.state.star + 0.5
    //     })
    
    // //     this.setState((prevstate)=>{
           
    // //             star : prevstate.star + 0.5
            
    // //     },()=>console.log("Stars inside callback:",this.state.star));
        
    // //     console.log("Stars outside callback: ",this.state.star);
    // // };
    // }
    // minusStars=() => {

    //     if(this.state.star>0){
    //         return}
    //        //form1 of setState
    // this.setState({
    //     star: this.state.star - 0.5
    // }) 
    // }

    // handleFav = () => {
    //     this.setState({
    //         fav:!this.state.fav
    //     })
    // }

    // handleCart = () => {
    //     this.setState({
    //         cart:!this.state.cart
    //     })
    // }
    handIncStar = (movie) => {
      const {movies} = this.state;
      const mid = movies.indexOf(movie);
      if(movies[mid].star>=5){
        return;
      }
      movies[mid].star +=0.5;
      this.setState({
        // movies:movies
        // Above line can be shortly written as 
        movies
      })
    }

    // Handle decreasing stars
    handDecStar = (movie) => {
      const {movies} = this.state;
      const mid = movies.indexOf(movie);
      if(movies[mid].star<=0){
        return;
      }
      movies[mid].star -=0.5;
      this.setState({
        // movies:movies
        // Above line can be shortly written as 
        movies
      })
    }

    handFav = (movie) => {
      
    }

    render(){
        const {movies} =  this.state;
        return (
            <div className="main">
                {movies.map((movie,index) => (
                <Moviecard movies = {movie}
                           key = {index} addStars={this.handIncStar} decStars={this.handDecStar}
                           handFav={this.handFav}/>

            ))}              
            </div>

        )
    }
}

export default Movielist;