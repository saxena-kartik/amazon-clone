import React from 'react';
import './Product.css';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import {useStateValue} from './StateProvider';
// import Lean from './images/leanStartUp.jpg'

function Product({id, title, price, rating, image}) {
    const [state, dispatch]=useStateValue();

    const addToBag=()=>{
        dispatch({type : 'ADD_TO_BAG',
           item:{
            id: id,
            title: title,
            image: image,
            price:price,
            rating: rating
           } 
    
    });
        //Dipatch the item into the data layer
    };

    let partial_rating=rating-Math.floor(rating);
    let flag=false;
    if(partial_rating>0)
    {
        flag=true;
    }

   

    return (
        <div className='product'>
        
            <p className="product__title">{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">{
            Array(Math.floor(rating)).fill().map((arr, i)=>(<StarIcon/>))}
            {flag?<StarHalfIcon/>:<span></span>}
        
            </div>

            <div className="product__image">
            <img src={image} alt="product"></img>

            </div>

            <button onClick={addToBag}>Add to bag</button>
        </div>
            
        
    )
}

export default Product;
