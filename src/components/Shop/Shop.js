import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart } from '../../utilities/fakedb';
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

  useEffect(()=>{
    let dbCart = localStorage.getItem('shopping-cart')
    if(dbCart)
    {
      let objectaCart = JSON.parse(dbCart)
      let cartItem = []
      for(const key in objectaCart)
      {
       let pro = products.find(p => p.id === key)
      //console.log(pro)
      if(pro)
      {
       pro['quantity'] = objectaCart[key]
       cartItem.push(pro)
       console.log(products)
      }  
      }
      setCart(cartItem)
    }
    else
    {

    }
   
  },[products])
  
  
  const onLoadAddToCart = (product) =>
  {
      const newProduct = [...cart,product]
      setCart(newProduct)
      addToDb(product.id)
      let dbCart = localStorage.getItem('shopping-cart')
    if(dbCart)
    {
      let objectaCart = JSON.parse(dbCart)
      let cartItem = []
      for(const key in objectaCart)
      {
       let pro = products.find(p => p.id === key)
      //console.log(pro)
      if(pro)
      {
       pro['quantity'] = objectaCart[key]
       cartItem.push(pro)
       console.log(products)
      }  
      }
      setCart(cartItem)
    }
  }

  const loadRefreshCart = () =>
  {
    deleteShoppingCart()
    setCart([])
    products.map(product => product.quantity = 0)
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
           <Cart  cart = {cart} loadRefreshCart = {loadRefreshCart}></Cart>
         }
      </div>
    </div>
  );
};

export default Shop;