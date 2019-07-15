import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";

class EditJob extends Component {
  constructor(props) {
    super(props);
    // create refs
    this.roInput = React.createRef();
    this.vehicleInput = React.createRef();
    this.descInput = React.createRef();
    this.partsInput = React.createRef();
    this.techInput = React.createRef();
    this.statusInput = React.createRef();
    this.promisedInput = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();

    const { job, firestore, history } = this.props;

    const updateJob = {
      ro: this.roInput.current.value,
      vehicle: this.vehicleInput.current.value,
      desc: this.descInput.current.value,
      parts: this.partsInput.current.value,
      tech: this.techInput.current.value,
      status: this.statusInput.current.value,
      promised: this.promisedInput.current.value
    };

    firestore
      .update({ collection: "jobs", doc: job.id }, updateJob)
      .then(history.push("/"));
  };

  render() {
    const { job } = this.props;

    if (job) {
      return (
        <div className='container'>
          <div className="row">
            <Link to="/" className="btn btn-link">
              {" "}
              Back to Jobs
            </Link>
          </div>
          <div className='col-8 text-center'>
          <div className="card">
            <div className="card-header">Edit Job </div>
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group ">
                  <label htmlFor="Ro">Repair Order #</label>
                  <input
                    type="text"
                    className="form-control"
                    name="ro"
                    required
                    ref={this.roInput}
                    defaultValue={job.ro}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="vehicle">Vehicle info</label>
                  <input
                    type="text"
                    className="form-control"
                    name="vehicle"
                    required
                    ref={this.vehicleInput}
                    defaultValue={job.vehicle}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="desc">Work to Perform</label>
                  <input
                    type="text"
                    className="form-control"
                    name="desc"
                    required
                    ref={this.descInput}
                    defaultValue={job.desc}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="parts">Parts Status</label>
                  <input
                    type="text"
                    className="form-control"
                    name="parts"
                    required
                    ref={this.partsInput}
                    defaultValue={job.parts}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="tech">Tech Assigned</label>
                  <input
                    type="text"
                    className="form-control"
                    name="tech"
                    required
                    ref={this.techInput}
                    defaultValue={job.tech}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="status">Job Status</label>
                  <input
                    type="text"
                    className="form-control"
                    name="status"
                    required
                    ref={this.statusInput}
                    defaultValue={job.status}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="promised">Promised By</label>
                  <input
                    type="text"
                    className="form-control"
                    name="promised"
                    required
                    ref={this.promisedInput}
                    defaultValue={job.promised}
                  />
                </div>
                <input
                  type="submit"
                  value="submit"
                  className="btn btn-primary btn-block"
                />
              </form>
            </div>
          </div>
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

EditJob.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default compose(
  firestoreConnect(props => [
    { collection: "jobs", storeAs: "job", doc: props.match.params.id }
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    job: ordered.job && ordered.job[0]
  }))
)(EditJob);
