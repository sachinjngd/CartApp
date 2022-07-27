import React from "react";

 const CartItem = (props)=> {

        const{name , price , qty , img} = props.product;
        
        const{product , increaseQty , decreaseQty , deleteProduct} = props
        

        return(
            <div className="cart-item">
                <div className="left-block">
                <img style={styles.image} src={img}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{name}</div>
                    <div style={{color:"#777"}}>Rs {price}</div>
                    <div style={{color:"#777"}}>Qty : {qty}</div>
                    <div className="cart-item-actions">
                        {/*icons*/}
                        <img alt="increase" className="action-icons" onClick={()=>{increaseQty(product)}} src="https://cdn-icons-png.flaticon.com/512/992/992651.png"/>
                        <img alt="decrease" className="action-icons" onClick={()=>{decreaseQty(product)}} src="https://cdn-icons-png.flaticon.com/512/992/992683.png"/>
                        <img alt="delete" className="action-icons" onClick={()=>{deleteProduct(product.id)}}  src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"/>
                    </div>
                </div>
            </div>
        );
    }


 const styles = {
    image : {
        height : 110,
        width : 110,
        padding : 10,
        borderRadius : 4,
        background : '#ccc '
    }
 }

 export default CartItem;