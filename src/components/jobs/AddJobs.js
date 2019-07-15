import React, { Component } from "react";
import { Link } from "react-router-dom";
//import { compose } from "redux";
//import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";

class AddJobs extends Component {
  state = {
    ro: "",
    vehicle: "",
    desc: "",
    parts: "",
    tech: "",
    status: "",
    promised: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newJob = this.state;

    const { firestore } = this.props;

    firestore
      .add({ collection: "jobs" }, newJob)
      .then(() => this.props.history.push("/"));
  };

  render() {
    return (
      <div className="container align-middle">
        <div className="col-8 align-middle">
          <div className="row text-center">
            <Link to="/" className="btn btn-link">
              {" "}
              Back to Jobs
            </Link>
            <span className="text-center">
              {" "}
              <h3>Add Job</h3>
            </span>
          </div>
          <div>
            <div className="card text-center">
              <div className="card-header">
                <div className="card-body">
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <label htmlFor="Ro">Repair Order #</label>
                      <input
                        type="text"
                        className="form-control"
                        name="ro"
                        required
                        onChange={this.onChange}
                        value={this.state.ro}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="vehicle">Vehicle info</label>
                      <input
                        type="text"
                        className="form-control"
                        name="vehicle"
                        required
                        onChange={this.onChange}
                        value={this.state.vehicle}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="desc">Work to Perform</label>
                      <input
                        type="text"
                        className="form-control"
                        name="desc"
                        required
                        onChange={this.onChange}
                        value={this.state.desc}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="parts">Parts Status</label>
                      <input
                        type="text"
                        className="form-control"
                        name="parts"
                        required
                        onChange={this.onChange}
                        value={this.state.parts}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="tech">Tech Assigned</label>
                      <input
                        type="text"
                        className="form-control"
                        name="tech"
                        required
                        onChange={this.onChange}
                        value={this.state.tech}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="status">Job Status</label>
                      <input
                        type="text"
                        className="form-control"
                        name="status"
                        required
                        onChange={this.onChange}
                        value={this.state.status}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="promised">Promised By</label>
                      <input
                        type="text"
                        className="form-control"
                        name="promised"
                        required
                        onChange={this.onChange}
                        value={this.state.promised}
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
        </div>
      </div>
    );
  }
}

AddJobs.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default firestoreConnect()(AddJobs);
