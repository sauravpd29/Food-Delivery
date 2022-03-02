import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getFoodById, deleteFoodById } from "../actions/foodActions";

export const FoodItem = ({
  auth: { isAuthenticated, user },
  food: { food },
  getFoodById,
  deleteFoodById,
}) => {
  const { id } = useParams();

  useEffect(() => {
    getFoodById(id);
  }, [getFoodById, id]);

  const navigate = useNavigate();

  const onClick = (e) => {
    deleteFoodById(food.id, navigate);
  };
  const onClick1 = (e) => {
    console.log("button clicked");
    navigate("/foods/update-food");
  };
  return food ? (
    // <div className="row food-details-container">
    //   <div className="col">
    //     <img
    //       src={food.foodPic}
    //       className="card-img-top d-inline-block"
    //       alt={food.foodName}
    //     />
    //   </div>
    //   <div className="col">
    //     <Link to="/" className="btn btn-light mr-auto">
    //       Back To Foods
    //     </Link>

    //     <div>
    //       <h3>{food.foodName}</h3>
    //       <h1>₹ {food.foodCost}</h1>
    //       <h2>{food.foodType}</h2>

    //       <div>{food.description}</div>
    //       {isAuthenticated && user.isAdmin && (
    //         <div className="btn-group-vertical">
    //           <button
    //             type="button"
    //             className="btn btn-primary mt-2"
    //             onClick={onClick1}
    //           >
    //             Update Item
    //           </button>
    //           <button
    //             type="button"
    //             className="btn btn-primary mt-2"
    //             onClick={onClick}
    //           >
    //             delete Item
    //           </button>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </div>
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
                    <Link to="/" className="btn btn-dark">
                      <i className="fa fa-chevron-left" aria-hidden="true"></i>{" "}
                      &nbsp; Back To Menu
                    </Link>
                    <br />
                    <br />
                    <Link className="btn btn-success" to="/foods/update-food">
                      Update Food
                    </Link>
                    &nbsp;&nbsp;
                    <Link
                      className="btn btn-warning"
                      onClick={(e) => deleteFoodById(food.id, navigate)}
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
  ) : (
    <h4>No Food Found</h4>
  );
};

FoodItem.propTypes = {
  food: PropTypes.object.isRequired,
  getFoodById: PropTypes.func.isRequired,
  deleteFoodById: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  food: state.food,
  auth: state.auth,
});

const mapDispatchToProps = { getFoodById, deleteFoodById };

export default connect(mapStateToProps, mapDispatchToProps)(FoodItem);
