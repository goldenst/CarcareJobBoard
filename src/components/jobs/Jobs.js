import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";

class Jobs extends Component {
  render() {
    const { jobs } = this.props;

    if (jobs) {
      return (
        <div>
          <div className="col-md-6">
            <h2>
              <i className="fas fa-user" /> Jobs{" "}
            </h2>
          </div>
          <div className="col-md-6" />
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Ro #</th>
                <th>Vehicle</th>
                <th>Work</th>
                <th>Parts</th>
                <th>Tech</th>
                <th>Status</th>
                <th>Promised</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map(job => (
                <tr key={job.id}>
                  <td>{job.ro}</td>
                  <td>{job.vehicle}</td>
                  <td>{job.desc}</td>
                  <td>{job.parts}</td>
                  <td>{job.tech}</td>
                  <td>{job.status}</td>
                  <td>{job.promised}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

Jobs.propTypes = {
  firestore: PropTypes.object.isRequired,
  jobs: PropTypes.array
};

export default compose(
  firestoreConnect([{ collection: "jobs" }]),
  connect((state, props) => ({
    jobs: state.firestore.ordered.jobs
  }))
)(Jobs);
