import React from 'react'
import './SingleProduct.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../../Redux/Slices/CartSlice';

export default function SingleProduct({ product }) {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cartReducer.cart)
  const carrItem = cart.find(item => item.id === product.id)
  const cartQuantity = carrItem ? carrItem.quantity : 0;



  return (
    <div className='singleProduct'>
      <img className='productImage' src={product.images[0]} alt="img" />
      <div className="productInfo">
        <h2 className='productTitle'>{product.title}</h2>
        <p className='productPrice'>{product.price}</p>
      </div>

     <div className="cartInfo">
      <button className='button' onClick={()=> dispatch(removeFromCart(product.id))}> - </button>
      <span>{cartQuantity}</span>
       
      <button className='button' onClick={()=> dispatch(addToCart(product.id))}> + </button>
     </div>

    </div>
  )
}
