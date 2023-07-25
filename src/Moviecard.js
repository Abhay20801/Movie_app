// This is our class based component 
import React from 'react';
// If we directly wants to import component so no need to import react
// class Moviecard extends Component{}
// import {Component} from 'react';
class Moviecard extends React.Component{
    constructor(){
        super();
        this.state = {
            title: 'The Avengers',
            plot:'Supernatural Powers shown in the movie',
            price:199,
            rating: 8.9,
            stars:0
        } 
    }
    
    addStars=()=>{
        // Method 1
        // this.setState({
        //     stars: this.state.stars + 0.5
        // })

        // Method 2 of setstate , giving previous state as argumnet 
        this.setState((prevstate)=>{
            if(this.state.stars>=5){
                return;
            }
            return {
                stars : prevstate.stars + 0.5
            }
        },()=>console.log("Stars inside callback:",this.state.stars));
        
        console.log("Stars outside callback: ",this.state.stars);
    };

    minusStars=() => {
        this.setState((prevstate)=>{
            if(prevstate.stars>0){
            return {
                
                stars : prevstate.stars - 0.5
            }
        }
        });  
    }

    render(){
        const {title,plot,price,rating,stars} = this.state;
        return (
            <div className='main'>
                <div className='movie-card'>
                    <div className='left'>
                        <img alt="Poster" src="https://www.themoviedb.org/t/p/original/qMxAmzGQO722q0UlssCOPhrXmvX.jpg"/>
                    </div>
                    <div className='right'>
                        <div className='title'>{title}</div>
                        <div className='plot'>{plot}</div>
                        <div className='price'>Rs. {price}</div>

                        <div className='footer'>
                            <div className='rating'>{rating}</div>
                            <div className='star-dis'>
                                <img className='str-btn' src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                                 alt="decrease" onClick={this.minusStars}/>
                                <img alt ="star" 
                                src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" 
                                className='stars' onClick={this.addStars.bind(this)}/>

                                <img className='str-btn' src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" alt="increase"/>
                                <span>{stars}</span>
                            </div>
                            <button className='favourite-btn'>Favourite</button>
                            <button className='cart-btn'>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Moviecard;