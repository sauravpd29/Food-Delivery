import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFood } from "../actions/foodActions";
export const AddFood = ({ addFood }) => {
  const [formData, setFormData] = useState({
    foodName: "",
    foodCost: "",
    description: "",
    foodPic: "",
    foodType: "",
  });
  const { foodName, foodCost, description, foodPic, foodType } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(foodType);
    addFood({ foodName, foodCost, description, foodPic, foodType }, navigate);
  };
  return (
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black">
            <div className="card-body p-md-0">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Add Food
                  </p>

                  <form className="mx-1 mx-md-4" onSubmit={onSubmit}>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-pizza-slice"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="foodName"
                          name="foodName"
                          placeholder="Name of Food"
                          onChange={onChange}
                          aria-describedby="foodNameHelp"
                        />
                        <label className="form-label">Food Name</label>
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fa fa-rupee-sign"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="number"
                          className="form-control form-control-lg"
                          id="foodCost"
                          name="foodCost"
                          placeholder="Cost of Food"
                          onChange={onChange}
                          aria-label="Amount (to the nearest rupees)"
                        />
                        <label className="form-label">Food Cost</label>
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fa fa-info"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label htmlFor="foodDesc" className="form-label">
                          Description
                        </label>
                        <textarea
                          className="form-control form-control-lg"
                          id="description"
                          name="description"
                          placeholder="Description"
                          onChange={onChange}
                          aria-describedby="foodDescHelp"
                        ></textarea>
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fa fa-link"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label htmlFor="foodPic" className="form-label">
                          URL of Food Picture
                        </label>
                        <input
                          type="web"
                          className="form-control form-control-lg"
                          id="foodPic"
                          name="foodPic"
                          placeholder="URL of Food Image"
                          onChange={onChange}
                          aria-describedby="foodPicHelp"
                        />
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fa fa-filter"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label htmlFor="foodType" className="form-label">
                          Food Type
                        </label>
                        <select
                          className="form-select"
                          onChange={onChange}
                          name="foodType"
                        >
                          <option value="DEFAULT"></option>
                          <option>INDIAN</option>
                          <option>CHINESE</option>
                          <option>MEXICAN</option>
                        </select>
                      </div>
                    </div>

                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <input
                        type="submit"
                        className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-4"
                        value="   Add   "
                      />
                    </div>
                  </form>
                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                  <img
                    src="https://wallpaperaccess.com/full/6221127.jpg"
                    className="img-fluid"
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

AddFood.propTypes = {
  addFood: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  addFood,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFood);
