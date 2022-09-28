import React, { useEffect, useState } from 'react';
import Singleproduct from '../Singleproduct/Singleproduct';
import './Shop.css'
const Shop = () => {
  const [products , setProducts] = useState([])
  const [cart , setCart] = useState([])
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
      <div>
          <h3>This is cart portion</h3>
          <p>Selected product : {cart.length}</p>
          {
            cart.map(scart =>{
              return <div>{scart.name}</div>
            })
          }
      </div>
    </div>
  );
};

export default Shop;