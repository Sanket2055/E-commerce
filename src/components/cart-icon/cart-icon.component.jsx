import React from "react";
import './cart-icon.styles.scss';

import { ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"
import { connect } from "react-redux";
import { togglecarthidden } from "../../redux/cart/cart.actions";
const CartIcon=({togglecarthidden})=>(
    <div className="cart-icon" onClick={togglecarthidden}>
        <ShoppingIcon className="shopping-icon"/>

        <span className="item-count">0</span>
    </div>
)
const mapDispatchToProps=dispatch=>({
    togglecarthidden:()=>dispatch(togglecarthidden())
})
export default connect(null , mapDispatchToProps)(CartIcon);