import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBagTotal } from './reducer';

function Subtotal() {
    const[{bag}, dispatch]=useStateValue();
    
    return (
        <div className='subtotal'>
            {/* <h2> The Subtotal will go here...</h2> */}
            <CurrencyFormat renderText={(value)=>(
            <>
            <p>
              {/* Subtotal ({bag.length} items) */}
              Subtotal ({bag?.length} items):<strong>{`${value}`}</strong>      
            </p>
               <small className="subtotal__gift">
                  <input type="checkbox"/>  This order contains a gift  
               </small> 
            </>)}
                decimalScale={2}
                // value={getBagTotal(bag)}
                value={getBagTotal(bag)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
