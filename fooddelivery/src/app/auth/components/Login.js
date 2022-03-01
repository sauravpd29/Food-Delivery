//rafc
//functions are stateless - use hook - useState

import React, { Fragment, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../action/authAction";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    login(email, password);
  };

  //* Redirect if logged in

  if (isAuthenticated) {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Food Delivery</h1>
                <p className="lead">
                  {" "}
                  Order your favourite food at anytime with Food Delivery!
                </p>
                <hr />
                <a href="/dashboard" className="btn btn-secondary">
                  Click Here to view Menu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Fragment>
      <section className="h-15 pt-2 gradient-form">
        <div className="container py-5  pt-2">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <h4>Food Delivery</h4>

                        <img
                          src="https://t4.ftcdn.net/jpg/03/10/96/77/360_F_310967735_vWiWRc8DGV3fb4eaW8O339AvbOsmxzVi.jpg"
                          style={{ width: 120 }}
                          alt="logo"
                        />
                        <h5>India's largest Food Delivery Service. </h5>
                        <h5>Better food for more people. </h5>
                      </div>
                      <br />
                      <br />
                      <form onSubmit={(e) => onSubmit(e)}>
                        <p>Please login to your account</p>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email Address"
                            name="email"
                            value={email}
                            onChange={(e) => onChange(e)}
                            required
                          />
                          <label className="form-label">Username</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            minLength="6"
                            value={password}
                            onChange={(e) => onChange(e)}
                            required
                          />
                          <label className="form-label">Password</label>
                        </div>

                        <div className="text-center pt-1 mb-4 pb-1">
                          <input
                            type="submit"
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-4"
                            value="                    Login                    "
                          />
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <Link
                            to="/api/register"
                            type="button"
                            className="btn btn-outline-danger"
                          >
                            Create new
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4" align="justify">
                        अब एक दशक से अधिक समय से, हम अपने उपयोगकर्ताओं को देशों
                        में नए स्वाद और अनुभवों की खोज करने में सशक्त बना रहे
                        हैं। अपने उपयोगकर्ताओं के लिए सावधानीपूर्वक जानकारी एक
                        साथ रखकर, हम उन्हें एक सूचित विकल्प बनाने में सक्षम
                        बनाते हैं
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
