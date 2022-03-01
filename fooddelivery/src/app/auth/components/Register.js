import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { register } from "../action/authAction";

const Register = ({ isAuthenticated, register }) => {
  const [formData, setformData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    address: "",
    Housenumber: "",
    street: "",
    city: "",
    state: "",
    // role: [],
  });
  const [error, setError] = useState({});

  const {
    username,
    email,
    password,
    password2,
    Housenumber,
    street,
    city,
    state,
    // roleuser,
  } = formData;
  var address = Housenumber + street + city + state;
  // var role = [roleuser];
  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("hello from register");
    console.log(JSON.stringify(formData));

    const houseno = document.getElementById("Housenumber");
    const street = document.getElementById("street");
    const city = document.getElementById("city");
    const state = document.getElementById("state");

    var address =
      houseno.value +
      ", " +
      street.value +
      ", " +
      city.value +
      ", " +
      state.value;

    // const roleuser = document.getElementById("roleuser");
    // var role = [roleuser.value.split(",")];
    if (password !== password2) {
    } else {
      register({ username, email, password, address });
    }
  };
  if (isAuthenticated) {
    return <Navigate to="/dashboard"></Navigate>;
  }
  return (
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black">
            <div class="card-body p-md-0">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Sign up
                  </p>

                  <form class="mx-1 mx-md-4" onSubmit={onSubmit}>
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="text"
                          id="form3Example1c"
                          class="form-control"
                          placeholder="Name"
                          name="username"
                          onChange={onChange}
                          required
                        />
                        <label class="form-label">Your Name</label>
                        <div>{error.name}</div>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="email"
                          id="form3Example3c"
                          class="form-control"
                          placeholder="Email Address"
                          name="email"
                          onChange={onChange}
                          required
                        />
                        <label class="form-label">Your Email</label>
                        <div>{error.email}</div>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="password"
                          id="form3Example4c"
                          class="form-control"
                          placeholder="Password"
                          name="password"
                          onChange={onChange}
                          required
                        />
                        <label class="form-label">Password</label>
                        <div>{error.password}</div>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="password"
                          id="form3Example4cd"
                          class="form-control"
                          placeholder="Confirm Password"
                          name="password2"
                          onChange={onChange}
                          required
                        />
                        <label class="form-label">Repeat your password</label>
                        <div>{error.password2}</div>
                      </div>
                    </div>
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-address-card fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="text"
                          id="Housenumber"
                          className="form-control form-control-lg"
                          placeholder="Housenumber"
                          name="Housenumber"
                          onChange={onChange}
                        />
                        <input
                          type="text"
                          id="street"
                          className="form-control form-control-lg"
                          placeholder="street"
                          name="street"
                          onChange={onChange}
                        />
                        <input
                          type="text"
                          id="city"
                          className="form-control form-control-lg"
                          placeholder="city"
                          name="city"
                          onChange={onChange}
                        />
                        <input
                          type="text"
                          id="state"
                          className="form-control form-control-lg"
                          placeholder="state"
                          name="state"
                          onChange={onChange}
                        />

                        <label class="form-label">Give Address</label>
                        <div>{error.address}</div>
                      </div>
                    </div>

                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <input
                        type="submit"
                        className="btn btn-info btn-block mt-1"
                      />
                    </div>
                  </form>
                </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                  <img
                    src="https://wallpaperaccess.com/full/6221127.jpg"
                    class="img-fluid"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  isAuthenticated: PropTypes.bool,
  register: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = { register };

export default connect(mapStateToProps, mapDispatchToProps)(Register);
