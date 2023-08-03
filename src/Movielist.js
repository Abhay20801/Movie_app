import { Component } from "react";
import Moviecard from "./Moviecard";



class Movielist extends Component{
 

    render(){
        const {movies,addStars,decStars,handFav,toggleCart} =  this.props;
        return (
            <div className="main">
                {movies.map((movie,index) => (
                  // All functions are passed as props 
                <Moviecard movies = {movie}
                           key = {index} addStars={addStars} 
                           decStars={decStars}
                           handFav={handFav}
                           toggleCart={toggleCart}/>

            ))}              
            </div>

        )
    }
}

export default Movielist;




// Only one movie cart is in use


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