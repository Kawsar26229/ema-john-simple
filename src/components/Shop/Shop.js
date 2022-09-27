import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  const [shipping, setShipping] = useState(0);
  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //Cart Handler
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    const totalPrice = newCart.reduce((acc, curr) => {
      const total = acc + curr.price;
      return total;
    }, 0);
    setPrice(totalPrice);
    const totalShipping = newCart.reduce((acc, curr) => {
      const total = acc + curr.shipping;
      return total;
    }, 0);
    setShipping(totalShipping);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="card-container">
        <h4>Order Summary</h4>
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: ${price}</p>
        <p>Total Shipping Charge: ${shipping}</p>
      </div>
    </div>
  );
};

export default Shop;
