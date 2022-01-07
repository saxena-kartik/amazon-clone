import React from 'react'
import './CheckoutItem.css'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { useStateValue } from './StateProvider';

function CheckoutItem({id, title, price, rating, image}) {

    const[{bag}, dispatch]=useStateValue();

    const removeFromBag= ()=>{
        //remove product from bag
        dispatch({type: 'REMOVE_FROM_BAG',
    id: id})

    }

    let partial_rating=rating-Math.floor(rating);
    let flag=false;
    if(partial_rating>0)
    {
        flag=true;
    }

    return (
        <div className='checkoutitem'>
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

            <button onClick={removeFromBag}>Remove from bag</button>
        </div>
    )
}

export default CheckoutItem
