import React from 'react';
import './Home.css';
import banner from './images/banner.jpg';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className="home__image" src={banner} alt="banner" ></img>

            <div className="home__row">
                
            <Product
                   id="1"
                   title="Amazon Echo (3rd generation) | Smart Speaker with Alexa, Charcoal Fabric"
                   price={98.99}
                   rating={4.5}
                   image="https://www.reliancedigital.in/medias/Amazon-B07P9B3W1G-Computer-Speakers-491600506-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMzk0Njd8aW1hZ2UvanBlZ3xpbWFnZXMvaDYxL2hhMi85MjE2NjYzOTc4MDE0LmpwZ3xjN2UyOTIyOTA0ZjAyZGEyYmMxMjcwNzIxNGNhMDUwN2E3MzU3ODg5YmRhN2M0NGU3YjQ5ZjRmNDA1NjZiZWZj" 

                 />

                <Product
                   id="2"
                   title="The Lean Start Up: How Constant innovation creates radically successful businesses Paperback"
                   price={14.99}
                   rating={4}
                   image="https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg" 

                 />

                
            </div>

            <div className="home__row">

               <Product
                  id="3"  
                  title="New Apple iPhone 13 Mini (256GB) - Starlight"              price={799.99}
                  rating={4.5}
                  image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-starlight-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1629907844000"  
                 />

                 <Product
                   id="4"
                   title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB)- Silver (4th Generation)"
                   price={589.99}
                   rating={4.5}
                   image="https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP815/ipad-pro-12-2020.jpeg" 

                 />
                
            </div>

            <div className="home__row">

            <Product
                  id="5"  
                  title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"              price={999.99}
                  rating={3.5}
                  image="https://images.samsung.com/is/image/samsung/sg-curved-chg90-lc49hg90dmexxs-001-front-black-72805166"  
                 />
            </div>   

            </div>
        </div>
    )
}

export default Home;
