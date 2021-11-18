import React from 'react';
import './Home.css';
import Product from './Product';


function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img  className='home__image' src='https://m.media-amazon.com/images/I/610aFo74RdL._SX3000_.jpg' alt='' /> 

                <div className='home__row'>
                    <Product 
                    id='1'
                    title='the lean startup' 
                    price='29.99' 
                    image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
                    rating={5}
                    />
                    <Product title='Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Roku Voice Remote with TV Controls' 
                    price='59.99' 
                    image='https://m.media-amazon.com/images/I/71gBY-gGBwL._AC_SL1500_.jpg'
                    rating={4}
                    />
                </div>
                <div className='home__row'>
                <Product
                id='2'
                title='RDegree Men Original Antiperspirant Deodorant 48-Hour Odor Protection Cool Rush Mens Deodorant Stick 2.7 oz, 6 Count' 
                    price='9.99' 
                    image='https://m.media-amazon.com/images/I/914P2Ot1XnL._SL1500_.jpg'
                    rating={4}
                    />
                <Product 
                id='3'
                title='RDegree Men Original Antiperspirant Deodorant 48-Hour Odor Protection Cool Rush Mens Deodorant Stick 2.7 oz, 6 Count' 
                    price='9.99' 
                    image='https://m.media-amazon.com/images/I/914P2Ot1XnL._SL1500_.jpg'
                    rating={4}
                    />
                <Product 
                id='4'
                title='RDegree Men Original Antiperspirant Deodorant 48-Hour Odor Protection Cool Rush Mens Deodorant Stick 2.7 oz, 6 Count' 
                    price='9.99' 
                    image='https://m.media-amazon.com/images/I/914P2Ot1XnL._SL1500_.jpg'
                    rating={4}
                    />
                </div>
                <div className='home__row'>
                <Product 
                id='5'
                title='RDegree Men Original Antiperspirant Deodorant 48-Hour Odor Protection Cool Rush Mens Deodorant Stick 2.7 oz, 6 Count' 
                    price='9.99' 
                    image='https://m.media-amazon.com/images/I/914P2Ot1XnL._SL1500_.jpg'
                    rating={4}
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default Home;
