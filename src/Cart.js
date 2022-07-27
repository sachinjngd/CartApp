import React from "react";
import CartItem from "./CartItem";

 const Cart = (props)=>{

        const {products} = props;
        return(
            <div className="cart">
            
            {products.map((product)=>{
               return <CartItem product={product} key={product.id} increaseQty={props.increaseQty} decreaseQty={props.decreaseQty} deleteProduct={props.deleteProduct}/>
            })}
            </div>
            
        );
    }

 export default Cart;