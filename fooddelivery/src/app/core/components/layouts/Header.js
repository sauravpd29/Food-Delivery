import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../../auth/action/authAction";
import { deleteAccount } from "../../../auth/action/authAction";

export const Header = ({
  isAuthenticated,
  auth: { user },
  logout,
  deleteAccount,
}) => {
  const authLinks = (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link">Welcome {user && user.username} </a>
            </li>
            <li>
              <Link to="/dashboard" className="nav-link">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/food/add-food" className="nav-link">
                Add Foods
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/api/delete"
                className="nav-link"
                onClick={(e) => deleteAccount(user.id, e)}
              >
                <i className="fas fa-user"></i> &nbsp;Delete My Account
              </Link>
            </li>

            <li className="nav-item">
              <Link onClick={logout} className="nav-link" to="/">
                Logout
              </Link>
            </li>

            {/* <li className="nav-item">
              <a className="nav-link" href="/view-cart">
                <i className="bi bi-cart"></i> ({{ getCartSize }}) ₹ {{ cartTotal }}
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
  const guestLinks = (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-1">
          <li className="nav-item">
            <Link className="btn btn-lg btn-light" to="/api/register">
              Signup
            </Link>
          </li>
          &nbsp;&nbsp;
          <li className="nav-item">
            <Link className="btn btn-lg btn-dark" to="/api/login">
              Login
            </Link>
          </li>{" "}
        </ul>
      </div>
    </nav>
  );
  return (
    <nav className="navbar bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/api/login">
          <b>FOOD DELIVERY</b>
        </Link>

        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      </div>
    </nav>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
  auth: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth,
});

const mapDispatchToProps = { logout, deleteAccount };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
