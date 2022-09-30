import React from 'react';
import './Cart.css'
const Cart = ({cart,loadRefreshCart}) => {
 //console.log(cart)
 let quantity = 0
 let total = 0;
 let shipping = 0
   for(const p of cart)
   {
     quantity = quantity + p.quantity
     total = total + (p.price*p.quantity)
     shipping = shipping + (p.shipping*p.quantity)
   }
 let tax = total*.1;
 let grandTotal = total+shipping+tax
  return (
    <div className='cart-design'>
      <h3>Order Summary</h3>
      <p>Selected item : {quantity}</p>
      <p>total = ${total}</p>
      <p>Shipping = ${shipping}</p>
      <p>Tax = ${tax.toFixed(2)}</p>
      <p>Grandtotal = ${grandTotal.toFixed(2)}</p>
      <button onClick={loadRefreshCart} className='btn-designn'>Refresh Cart</button>
    </div>
  );
};

export default Cart;