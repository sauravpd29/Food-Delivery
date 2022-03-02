import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateFood } from "../actions/foodActions";

export const UpdateFood = ({ food: { food }, updateFood }) => {
  const [formData, setFormData] = useState({
    foodName: food.foodName,
    foodCost: food.foodCost,
    description: food.description,
    foodPic: food.foodPic,
    foodType: food.foodType,
  });
  const { foodName, foodCost, description, foodPic, foodType } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    updateFood(
      food.id,
      { foodName, foodCost, description, foodPic, foodType },
      navigate
    );
  };
  return (

    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black">
            <div class="card-body p-md-0">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Update Food
                  </p>

                  <form class="mx-1 mx-md-4" onSubmit={onSubmit}>
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-pizza-slice"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="foodName"
                          name="foodName"
                          value={foodName}
                          placeholder="Name of Food"
                          onChange={onChange}
                          aria-describedby="foodNameHelp"
                        />
                        <label class="form-label">Food Name</label>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fa fa-rupee-sign"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="number"
                          className="form-control form-control-lg"
                          id="foodCost"
                          value={foodCost}
                          name="foodCost"
                          placeholder="Cost of Food"
                          onChange={onChange}
                          aria-label="Amount (to the nearest rupees)"
                        />
                        <label class="form-label">Food Cost</label>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fa fa-info"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label htmlFor="foodDesc" className="form-label">
                          Description
                        </label>
                        <textarea
                          className="form-control form-control-lg"
                          id="description"
                          name="description"
                          placeholder="Description"
                          value={description}
                          onChange={onChange}
                          aria-describedby="foodDescHelp"
                        ></textarea>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fa fa-link"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label htmlFor="foodPic" className="form-label">
                          URL of Food Picture
                        </label>
                        <input
                          type="web"
                          className="form-control form-control-lg"
                          id="foodPic"
                          name="foodPic"
                          value={foodPic}
                          placeholder="URL of Food Image"
                          onChange={onChange}
                          aria-describedby="foodPicHelp"
                        />
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fa fa-filter"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label htmlFor="foodType" className="form-label">
                          Food Type
                        </label>
                        <select
                          className="form-select"
                          onChange={onChange}
                          name="foodType"
                          value={foodType}
                        >
                          <option value="DEFAULT"></option>
                          <option>INDIAN</option>
                          <option>CHINESE</option>
                          <option>MEXICAN</option>
                        </select>
                      </div>
                    </div>

                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <input
                        type="submit"
                        className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-4"
                        value="   Update   "
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

UpdateFood.propTypes = {
  updateFood: PropTypes.func.isRequired,
  food: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  food: state.food,
});

const mapDispatchToProps = { updateFood };

export default connect(mapStateToProps, mapDispatchToProps)(UpdateFood);
