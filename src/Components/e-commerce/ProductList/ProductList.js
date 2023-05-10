import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../../../Redux/Slices/ProductSlice';
import SingleProduct from '../SingleProduct/SingleProduct';
import './ProductList.css'

export default function ProductList() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.productReducer.products)

  useEffect(()=>{
    fetchData()
  },[])

  async function fetchData(){
    const response = await fetch( "https://api.escuelajs.co/api/v1/products")
     const data = await response.json();
     dispatch(loadProducts(data))
  }
  return (
    <div className='productList'>
      {products.map((item)=>(
        <SingleProduct key = {item.id} product={item} />

      ))}
    </div>
  )
}
