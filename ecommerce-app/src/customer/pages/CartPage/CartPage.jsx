import React, { useState } from 'react';
import ProductCardCart from '../../components/Cart/ProductCardCart';
import Checkout from '../../components/Cart/Checkout';
import productsData from '../../components/ProductCard/ProductsData';
const CartPage=({products})=>{
    const [index, setIndex]=useState(0);
    return(
        <div>
            <div className='lg:grid grid-cols-3 lg:px-16 relative lg:space-x-10'>
                <div className='col-span-2 '>
                    {productsData.slice(index, productsData.length).map((product) => (
                        <ProductCardCart key={product.id} product={product}/>
                    ))}
                </div>
                <div className='top-0 w-full col-span-1 flex-1'>
                    <Checkout/>
                </div>
            </div>
        </div>
    )
}
export default CartPage;