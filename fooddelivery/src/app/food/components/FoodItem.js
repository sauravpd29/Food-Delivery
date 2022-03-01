import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export const FoodItem = ({
  food: { id, foodCost, foodName, foodType, description, foodPic },
}) => {
  return (
    <div>
      <div width="100%">
        <table>
          <tbody>
            <tr>
              <td width="15%">
                {" "}
                <img src={foodPic} width="180px" height="200px" alt="" />
                &nbsp; &nbsp;
              </td>
              <td width="25%">
                {" "}
                <h4>{foodName} </h4>
              </td>
              <td width="34%">
                {foodCost && <span> at just Rs{foodCost}</span>}
              </td>
              <td width="10%">
                <Link to={`/food/${id}`} className="btn btn-primary">
                  View Food
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
    </div>
  );
};

FoodItem.propTypes = {
  food: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  food: state.food,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FoodItem);
