import React from 'react'
import './Checkout.css';
import CheckoutItem from './CheckoutItem';
import Product from './Product';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
function Checkout() {
    const[{bag}, dispatch]=useStateValue();
    return (
        <div className='checkout'>
        <div className="checkout__left">
            <img src="https://betanews.com/wp-content/uploads/2016/07/Primeday-banner.jpg" alt="ad_banner" className="checkout__ad" />

            <div className='checkout__list'>
                <h2 className='checkout__title'>Your Shopping Bag</h2>
                {/* Bag item
                Bag item
                Bag item
                Bag item */}
                {bag.map((item)=>{
                    console.log(item.title + " "+item.price);
                    
                    return <CheckoutItem id={item.id} title={item.title} price={item.price} rating={item.rating} image={item.image}/>
                }
                )}
            </div>

        </div>

        <div className="checkout__right">
        <Subtotal/>
        {/* <Subtotal/> component*/}

        </div>
        </div>
    )
}

export default Checkout
