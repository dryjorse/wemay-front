import React from "react";
import s from './cart.module.css'

interface CartProps {
  option: number;
  children: React.ReactNode;
}

const Cart: React.FC<CartProps> = ({ option, children }) => {
  if (option === 1) return <div className={s.cart1}>{children}</div>;

  return <div>Cart</div>;
};

export default Cart;
