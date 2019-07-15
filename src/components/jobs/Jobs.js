import React, { Component } from "react";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";

class Jobs extends Component {
  render() {
    const { jobs } = this.props;

    if (jobs) {
      return (
        <div>
          <div className="col" />
          <i className="fas fa-tools" /> {" "}Jobs{" "}
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
                  <td>
                    <Link
                      to={`/job/edit/${job.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" /> Edit
                    </Link>{" "}
                    <Link
                      to={`/job/${job.id}`}
                      className="btn btn-danger btn-sm"
                    >
                      <i
                        onClick={this.onDeleteClick}
                        className="fas fa-arrow-circle-right"
                      />{" "}
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <Spinner />;
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
