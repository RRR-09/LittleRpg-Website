import React from 'react';
const Product = ({ product }) => (
    <div style={{ display: "block" }}>
        <h2>{product.friendly_name}</h2>
        <p>PayPal_ID: {product.paypal_id}</p>
    </div >
)
export default Product
