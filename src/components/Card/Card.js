import {
  faShoppingBasket,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Card.css';

const Card = (props) => {
  const { cart } = props;

  const totalQuantity = cart.reduce((acc, curr) => {
    const total = acc + curr.quantity;
    return total;
  }, 0);

  const totalPrice = cart.reduce((acc, curr) => {
    const total = acc + curr.price * curr.quantity;
    return total;
  }, 0);

  const tax = totalPrice * 0.1;

  const shippingCharge = cart.reduce((acc, curr) => {
    const total = acc + curr.shipping;
    return total;
  }, 0);

  const grandTotal = totalPrice + shippingCharge + tax;

  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Items: {totalQuantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping: ${shippingCharge}</p>
      <p>Tax: {Math.round(tax)}$</p>
      <p>
        <strong>Grand Total: ${Math.round(grandTotal)}</strong>
      </p>
      <button className="btn btn-clear">
        Clear Cart <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
      </button>
      <button className="btn btn-review">
        Review Order <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Card;
