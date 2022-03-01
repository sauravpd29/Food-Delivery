import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getFoodById, deleteFood } from "../actions/foodAction";

export const DisplayFoodbyId = ({
  getFoodById,
  deleteFood,
  food: { food },
}) => {
  const { id } = useParams();

  useEffect(() => {
    getFoodById(id);
  }, [getFoodById]);

  return (
    <section class="h-100 gradient-form">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-10">
            <div class="card rounded-3 text-black">
              <div class="row g-0">
                <div class="col-lg-6">
                  <div class="card-body p-md-5 mx-md-4">
                    <img
                      src={food && food.foodPic}
                      width="300px"
                      height="320px"
                      alt=""
                    />
                  </div>
                </div>
                <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h2>{food && food.foodName}</h2>
                    <br />
                    <p>{food && <span> At just Rs {food.foodCost}</span>}</p>
                    <p>{food && <span> {food.description}</span>}</p>
                    <p className="my-1">
                      {food && <span> {food.foodType} Cusine</span>}
                    </p>
                    <br />
                    <Link to="/dashboard" className="btn btn-dark">
                      <i className="fa fa-chevron-left" aria-hidden="true"></i>{" "}
                      &nbsp; Back To Menu
                    </Link>
                    <br />
                    <br />
                    <Link className="btn btn-success" to="/food/edit-food">
                      Update Food
                    </Link>
                    &nbsp;&nbsp;
                    <Link
                      className="btn btn-warning"
                      onClick={(e) => deleteFood(id, e)}
                      to="/dashboard"
                    >
                      <i class="fa fa-trash" aria-hidden="true"></i> &nbsp;
                      Delete Food
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section className="container">
    //   <br />

    //   <br />

    //   <div>
    //     <img src={food && food.foodPic} width="230px" height="280px" alt="" />
    //     <div>
    //       <h2>{food && food.foodName}</h2>
    //       <p>{food && <span> at just Rs{food.foodCost}</span>}</p>
    //       <p>{food && <span> {food.description}</span>}</p>
    //       <p className="my-1">
    //         {food && <span> Foodtype:{food.foodType}</span>}
    //       </p>
    //       <Link
    //         className="btn btn-danger"
    //         onClick={(e) => deleteFood(id, e)}
    //         to="/dashboard"
    //       >
    //         Delete Food
    //       </Link>
    //       &nbsp;
    //       <Link className="btn btn-secondary" to="/food/edit-food">
    //         Update Food
    //       </Link>
    //     </div>
    //   </div>
    // </section>
  );
};

DisplayFoodbyId.propTypes = {
  food: PropTypes.object.isRequired,
  getFoodById: PropTypes.func.isRequired,
  deleteFood: PropTypes.func.isRequired,
  //   auth: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  food: state.food,

  //   auth: state.Food.Food.auth,
});

const mapDispatchToProps = { getFoodById, deleteFood };

export default connect(mapStateToProps, mapDispatchToProps)(DisplayFoodbyId);
