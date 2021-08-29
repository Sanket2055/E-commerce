import React from "react";
import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { togglecarthidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
const CartIcon = ({ togglecarthidden, itemCount }) => (
  <div className="cart-icon" onClick={togglecarthidden}>
    <ShoppingIcon className="shopping-icon" />

    <span className="item-count">{itemCount}</span>
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  togglecarthidden: () => dispatch(togglecarthidden()),
});
const mapStateToProps =createStructuredSelector
({
  itemCount:selectCartItemsCount

});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
