import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, logout } from "../../../auth/action/authAction";

const Header = ({ auth: { isAuthenticated, user }, logout, deleteUser }) => {
  const onClick = (e) => {
    deleteUser(user.id);
  };
  const authLinks = (
    <div className="collapse navbar-collapse" id="mobile-nav">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <div className="nav-link">
            Welcome &nbsp;
            {user ? user.name : ""}
          </div>
        </li>
      </ul>

      {isAuthenticated && user.isAdmin ? (
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/foods/add-food">
              Add Food
            </Link>
          </li>
          <li className="nav-item">
            <div className="my-2" align="center">
              <button
                className="btn btn-danger"
                onClick={(e) => deleteUser(user.id, e)}
              >
                <i className="fas fa-solid fa-eraser" />
                <a href="/">Delete User</a>
              </button>
            </div>
          </li>
          <li className="nav-item">
            <a onClick={logout} href="/" className="nav-link">
              <i className="fas fa-sign-out-alt" />
              Logout
            </a>
          </li>
        </ul>
      ) : (
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/cart/view-cart">
              <i className="fas fa-shopping-cart" />
              Cart
            </Link>
          </li>
          <li className="nav-item">
            <div className="my-2" align="center">
              <button
                className="btn btn-danger"
                onClick={(e) => deleteUser(user.id, e)}
              >
                <i className="fas fa-solid fa-eraser" />
                Delete User
              </button>
            </div>
          </li>
          <li className="nav-item">
            <a onClick={logout} href="/" className="nav-link">
              <i className="fas fa-sign-out-alt" />
              Logout
            </a>
          </li>
        </ul>
      )}
    </div>
  );

  const guestLinks = (
    <div className="collapse navbar-collapse" id="mobile-nav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/auth/register">
            <i className="fas fa-user" />
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/auth/login">
            <i className="fas fa-sign-in-alt" />
            Log In
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <h4>FoodDelivery</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      </div>
    </nav>
  );
};

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = { logout, deleteUser };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
