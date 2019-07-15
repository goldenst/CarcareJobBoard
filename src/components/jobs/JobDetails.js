import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
//import classnames from "classnames";
//import Jobs from "./Jobs";

class JobDetails extends Component {
  onDeleteClick = () => {
    const { job, firestore } = this.props;

    firestore
      .delete({ collection: "jobs", doc: job.id })
      .then(() => this.props.history.push("/"));
  };

  render() {
    const { job } = this.props;

    if (job) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/" className="btn btn-link">
                <i className="fas fa-arrow-circle-left" /> Back to Job Dashbord
              </Link>
            </div>
            <div className="col-md-6">
              <div className="btn btn-group float-right" />
              <Link to={`/job/edit/${job.id}`} className="btn btn-dark">
                Edit
              </Link>
              <button onClick={this.onDeleteClick} className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
          <hr />
          <div className="card">
            <h3 className="card-header">
            <h2><i class="fas fa-flag-checkered"></i>{" "}Is this Job Completed {" "}<i class="fas fa-flag-checkered"></i></h2>
              RO#:{"  "}
              {job.ro}
              
            </h3>
            <div className="card-body">
              <div className="row" />
              <h5>{job.desc}</h5>
              {"  "}Vehicle: {"  "} {job.vehicle}
            </div>
            </div>
            </div>

    
      );
    } else {
      return <Spinner />;
    }
  }
}

JobDetails.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default compose(
  firestoreConnect(props => [
    { collection: "jobs", storeAs: "job", doc: props.match.params.id }
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    job: ordered.job && ordered.job[0]
  }))
)(JobDetails);
