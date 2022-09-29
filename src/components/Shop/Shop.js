import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Singleproduct from '../Singleproduct/Singleproduct';
import './Shop.css'
const Shop = () => {
  //useState portion 
  const [products , setProducts] = useState([])
  const [cart , setCart] = useState([])
  //useEffect portion
  useEffect(()=>{
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])
  
  const onLoadAddToCart = (product) =>
  {
     const newProduct = [...cart,product]
     setCart(newProduct)
  }

  return (
    <div className='shop-conatiner'>
      <div className='product-container'>
          
          {
            products.map(sproduct => 
            <Singleproduct 
              loadFunction={onLoadAddToCart} 
              key={sproduct.id} 
              sproduct = {sproduct}>
            </Singleproduct>)
          }
      </div>
      <div className='cart-container'>
        
          {
             <Cart key ={cart.id}  cart = {cart}></Cart>
          }
      </div>
    </div>
  );
};

export default Shop;