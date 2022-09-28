import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Singleproduct.css'
const Singleproduct = (props) => {
  //console.log(props.sproduct)
  const {loadFunction,sproduct} = props
  const {name,price,quantity,img,ratings} = props.sproduct
  const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM5MosiFPzwoQT9eObotAr5M_LsIqfrbtTDw&usqp=CAU';

  return (
    <div className='product-design'> 
       <img src={img? img : url} alt="" />
       <div>
          <h4>{name}</h4>
          <p>Price : {price}</p>
          <p>Qunatity : {quantity}</p>
          <p>Rating : {ratings}</p>
          <button onClick={()=>loadFunction(sproduct)} className='btn-design'>Add to Cart  <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></button>
          
       </div>
    </div>
  );
};

export default Singleproduct;