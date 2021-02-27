import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    //console.log(cart);
    //const total = cart.reduce((total,prd)=>total+prd.price,0);
    let total= 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total= total+product.price;
    }
    let shipping = 0;

    if(total>35){
        shipping=0;
    }else if(total>15){
        shipping=4.99;
    }else if(total>0){
        shipping=12.99;
    }
    const tax= (total/10);
    const grandTotal =(total + shipping + Number(tax))
    const formatNumber= num=>{
        let precision =num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Ordered : {cart.length}</p>
            <p><small>Product Price :{formatNumber(total)}</small></p>
            <p><small>Shipping Cost :{shipping} </small></p>
            <p><small>Vat : {formatNumber(tax)}</small></p>
            <p>Total price : {formatNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;