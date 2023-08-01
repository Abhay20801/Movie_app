// This is our class based component 
import React from 'react';
// If we directly wants to import component so no need to import react
// class Moviecard extends Component{}
// import {Component} from 'react';
class Moviecard extends React.Component{

    render(){
        // Destructur movies and names it as data and can be accessed by this.props
        const {movies:data} =this.props
        console.log(data);

        const {movies,addStars,decStars,handleFav} = this.props;
        const {title,plot,poster,price,rating,star,fav,cart} = this.props.movies;
        return (
            <div className='main'>
                <div className='movie-card'>
                    <div className='left'>
                        <img alt="Poster" src={poster}/>
                    </div>
                    <div className='right'>
                        <div className='title'>{title}</div>
                        <div className='plot'>{plot}</div>
                        <div className='price'>Rs. {price}</div>

                        <div className='footer'>
                            <div className='rating'>{rating}</div>
                            <div className='star-dis'>
                                <img className='str-btn' src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                                 alt="decrease" onClick={()=>{decStars(movies)}}/>
                                <img alt ="star" 
                                src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" 
                                className='stars' onClick={()=>{addStars(movies)}}/>

                                <img className='str-btn' src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" alt="increase"/>
                                <span>{star}</span>
                            </div>
                            {/* {fav?<button className='unfavourite-btn' onClick={this.handleFav}>Un-Favourite</button>:
                            <button className='favourite-btn' onClick={this.handleFav}>Favourite</button>} */}
                            
{/* In one line of abovr */}
                            <button className=
                            {fav?'unfavourite-btn':'favourite-btn'} 
                            onClick={()=>{handleFav(movies)}}> {fav?'Unfavourite':'Favourite'}</button>


                            <button className={cart?'unfavourite-btn':'cart-btn'} 
                            onClick={this.handleCart}>{cart?'Remove':'Add to cart'}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Moviecard;