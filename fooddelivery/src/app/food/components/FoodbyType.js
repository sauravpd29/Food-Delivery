import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getFoodByType } from "../actions/foodAction";
import { FoodItem } from "./FoodItem";

export const FoodByType = ({ food: { foods }, getFoodByType }) => {
  const { type } = useParams();
  useEffect(() => {
    getFoodByType(type);
  }, [getFoodByType]);

  return (
    <section className="container">
      <br />
      <br />
      <div>
        <button className="btn btn-light " disabled>
          <h5>Cusine :</h5>
        </button>
        &nbsp;
        <a href={"/food/foodtype/INDIAN"} className="btn btn-danger ">
          Indian
        </a>
        &nbsp;
        <a href={"/food/foodtype/CHINESE"} className="btn btn-secondary">
          Chinese
        </a>
        &nbsp;
        <a href={"/food/foodtype/MEXICAN"} className="btn btn-warning">
          Mexican
        </a>
        &nbsp;
        <Link to="/dashboard" className="btn btn-success">
          All
        </Link>
      </div>
      <br />
      <h3 className="large text-primary">
        From The <i>'Diwane-Dusterkhaan'</i>
      </h3>

      <p className="lead">
        <i className="fab fa-connectdevelop"></i>Enjoy your favourite {type}{" "}
        food
      </p>

      <div className="foods">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Menu</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {foods.length > 0 ? (
                  foods.map((food) => <FoodItem key={food.id} food={food} />)
                ) : (
                  <h4>No Foods found...</h4>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

FoodByType.propTypes = {
  food: PropTypes.object.isRequired,
  getFoodByType: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  food: state.food,
});

const mapDispatchToProps = { getFoodByType };

export default connect(mapStateToProps, mapDispatchToProps)(FoodByType);
