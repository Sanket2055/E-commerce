
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';
import { togglecarthidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({cartItems , history , dispatch}) => (
  <div className='cart-dropdown'>
    <div className='cart-items' >
      {cartItems.length ? (
        cartItems.map((cartItem)=>(
          <CartItem key={cartItem.id}   item={cartItem}/>
        ))) :
        (
        <span className="empty-message">Your cart is empty</span>
        )
        
      }
    </div>
    <CustomButton onClick={()=>{history.push('/checkout');  dispatch(togglecarthidden())}}>GO TO CHECKOUT</CustomButton>
  </div>
);
const mapStateToProps=createStructuredSelector
({
  cartItems : selectCartItems

})

export default withRouter(connect(mapStateToProps)(CartDropdown));