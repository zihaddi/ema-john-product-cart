import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
 console.log(cart)
 let total = 0;
 let shipping = 0
 for(const p of cart)
 {
  total = total + p.price
  shipping = shipping + p.shipping
 }
 let tax = total*.1;
 let grandTotal = total+shipping+tax
  return (
    <div className='cart-design'>
      <h3>Order Summary</h3>
      <p>Selected item : {cart.length}</p>
      <p>total = ${total}</p>
      <p>Shipping = ${shipping}</p>
      <p>Tax = ${tax.toFixed(2)}</p>
      <p>Grandtotal = ${grandTotal.toFixed(2)}</p>
    </div>
  );
};

export default Cart;