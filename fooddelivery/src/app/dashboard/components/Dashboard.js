import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFoods } from "../../food/actions/foodAction";
import { Link, Navigate } from "react-router-dom";
import DisplayFood from "../../food/components/DisplayFood";
import { deleteAccount, loadUser } from "../../auth/action/authAction";

const Dashboard = ({
  auth: { user },
  getFoods,
  deleteAccount,
  food: { foods },
}) => {
  useEffect(() => {
    getFoods();
  }, [getFoods]);

  loadUser();

  return (
    <section className="container">
      {foods.length > 0 ? (
        <>
          <br />
          <br />

          <div>
            <button className="btn btn-light " disabled>
              <h5>Cusine :</h5>
            </button>
            &nbsp;
            <Link to={"/food/foodtype/INDIAN"} className="btn btn-danger ">
              Indian
            </Link>
            &nbsp;
            <Link to={"/food/foodtype/CHINESE"} className="btn btn-secondary">
              Chinese
            </Link>
            &nbsp;
            <Link to={"/food/foodtype/MEXICAN"} className="btn btn-warning">
              Mexican
            </Link>
          </div>
          <br />
          {<DisplayFood></DisplayFood>}
        </>
      ) : (
        <>
          <p>There are no food items to display, please add some details</p>
          <Link to="/food/add-food" className="btn btn-primary my-1">
            Add Foods
          </Link>
        </>
      )}
    </section>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  food: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  food: state.food,
});

const mapDispatchToProps = { getFoods, deleteAccount };
//const mapDispatchToProps = { getCurrentProfile };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
