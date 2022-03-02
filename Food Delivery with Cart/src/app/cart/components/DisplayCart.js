import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCart } from "../action/cartActions";
import CartItem from "./CartItem";

const DisplayCart = ({ user, deleteCart }) => {
  const cart = user && user.cart;
  if (!cart) return <div>No items in the cart</div>;

  const totalCost = (arr) => arr.reduce((sum, food) => sum + food.foodCost, 0);
  const unique = (arr) => [
    ...new Map(arr.map((item) => [JSON.stringify(item), item])).values(),
  ];

  return (
    <div className="view-cart-container">
      <h3 style={{ color: "green" }}>Confirm Your Order</h3>
      <br />
      {cart.length > 0 ? (
        <Fragment>
          <table className="table table-borderless">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Food name</th>
                <th>Food cost</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            {unique(cart).map((food, index) => (
              <CartItem key={food.id} food={food} index={index} />
            ))}
            <tfoot>
              <th colSpan="4"></th>
              <th>₹ {totalCost(cart)}</th>
            </tfoot>
          </table>

          <Link
            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-4 "
            to="/checkout"
            onClick={() => deleteCart()}
          >
            Checkout
          </Link>
        </Fragment>
      ) : (
        <h4>Nothing added to the cart...</h4>
      )}
    </div>
  );
};

DisplayCart.propTypes = {
  user: PropTypes.object.isRequired,
  deleteCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = { deleteCart };

export default connect(mapStateToProps, mapDispatchToProps)(DisplayCart);
