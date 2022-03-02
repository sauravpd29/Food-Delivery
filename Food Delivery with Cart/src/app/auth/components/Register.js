import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { register } from "../action/authAction";

const Register = ({ auth: { isAuthenticated }, register }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    roles: "",
    houseno: "",
    state: "",
    street: "",
    city: "",
    zipcode: "",
  });
  const {
    name,
    email,
    password,
    password2,
    roles,
    houseno,
    state,
    street,
    city,
    zipcode,
  } = formData;
  const navigate = useNavigate();
  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    var roles1 = [];
    roles1.push(roles);
    e.preventDefault();
    console.log(houseno, street, "------");

    if (password == password2) {
      const formData1 = {
        name: name,
        email: email,
        password: password,
        address: houseno + "  " + street + " " + city + " " + zipcode,
        roles: roles1,
      };
      console.log(formData1);
      register(formData1, navigate);
    }
  };
  if (isAuthenticated) {
    console.log(isAuthenticated);
    return <Navigate to="/auth/login"></Navigate>;
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
                          className="form-control form-control-lg"
                          placeholder="Name"
                          name="name"
                          onChange={onChange}
                          required
                        />
                        <label class="form-label">Your Name</label>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          placeholder="Email Address"
                          name="email"
                          onChange={onChange}
                        />
                        <label class="form-label">Your Email</label>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="far fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <select
                          name="roles"
                          class="form-control"
                          id="roles"
                          onChange={onChange}
                        >
                          <option value="none" selected disabled hidden>
                            Select an Option
                          </option>
                          <option value="admin">Admin</option>
                          <option value="user">User</option>
                        </select>
                        <label class="form-label">Your Role</label>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          placeholder="Password"
                          name="password"
                          onChange={onChange}
                        />
                        <label class="form-label">Password</label>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          placeholder="Confirm Password"
                          name="password2"
                          onChange={onChange}
                        />

                        <label class="form-label">Repeat your password</label>
                      </div>
                    </div>
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-address-card fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="text"
                          class="form-control"
                          id="houseno"
                          name="houseno"
                          placeholder="houseno"
                          aria-describedby="housenoHelp"
                          onChange={onChange}
                        />
                        <input
                          type="text"
                          class="form-control"
                          id="street"
                          name="street"
                          placeholder="street"
                          aria-describedby="streetHelp"
                          onChange={onChange}
                        />
                        <input
                          type="text"
                          class="form-control"
                          id="city"
                          name="city"
                          placeholder="city"
                          aria-describedby="cityHelp"
                          onChange={onChange}
                        />

                        <input
                          type="text"
                          class="form-control"
                          id="state"
                          name="state"
                          placeholder="state"
                          aria-describedby="stateHelp"
                          onChange={onChange}
                        />

                        <input
                          type="text"
                          class="form-control"
                          id="zipcode"
                          name="zipcode"
                          placeholder="zipcode"
                          aria-describedby="zipcodeHelp"
                          onChange={onChange}
                        />

                        <label class="form-label">Give Address</label>
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
  register: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  register,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
