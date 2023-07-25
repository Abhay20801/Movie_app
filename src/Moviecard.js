// This is our class based component 
import React from 'react';
// If we directly wants to import component so no need to import react
// class Moviecard extends Component{}
// import {Component} from 'react';
class Moviecard extends React.Component{
    render(){
        return (
            <div className='main'>
                <div className='movie-card'>
                    <div className='left'>
                        <img alt="Poster" src="https://www.themoviedb.org/t/p/original/qMxAmzGQO722q0UlssCOPhrXmvX.jpg"/>
                    </div>
                    <div className='right'>
                        <div className='title'>The Avengers</div>
                        <div className='plot'>Supernatural Powers shown in the movie</div>
                        <div className='price'>Rs.199</div>

                        <div className='footer'>
                            <div className='rating'>8.9</div>
                            <div className='star-dis'>
                                <img className='str-btn' src="https://cdn-icons-png.flaticon.com/128/43/43625.png" alt="decrease"/>
                                <img alt ="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className='stars'/>
                                <img className='str-btn' src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" alt="increase"/>
                                <span>0</span>
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