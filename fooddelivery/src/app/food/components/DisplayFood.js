import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFoods } from "../actions/foodAction";
import { FoodItem } from "./FoodItem";

export const DisplayFood = ({ food: { foods }, getFoods }) => {
  useEffect(() => {
    getFoods();
  }, [getFoods]);

  //const allFoods = Foods.map((Food)=>)

  return (
    <section className="container">
      <h3 className="large text-primary">
        From The <i>'Diwane-Dusterkhaan'</i>
      </h3>
      <p className="lead">
        <i className="fab fa-connectdevelop"></i>Enjoy your favourite food
      </p>

      <div className="foods">
        {foods.map((food) => (
          <FoodItem key={food.id} food={food} />
        ))}
      </div>
    </section>
  );
};

DisplayFood.propTypes = {
  food: PropTypes.object.isRequired,
  getFoods: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  food: state.food,
});

const mapDispatchToProps = { getFoods };

export default connect(mapStateToProps, mapDispatchToProps)(DisplayFood);
