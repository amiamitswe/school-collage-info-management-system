import React, { Component } from "react";
import axios from '../../hoc/axios-order'

import Aux from '../../hoc/Aux'
import StudentSInfor from './StudentInfo/StudentInfo'
import { Loding1 } from "../Utilities/Loading";
import { NoData } from "../Utilities/Alert";
import styles from "../../scss/App.module.scss";

class AllStudents extends Component {
  state = {
    C_Student: null,
    error: null
  };

  componentDidMount() {
    axios.get("sms")
      .then(response => this.setState({ C_Student: response.data.C_Student }))
      .catch(error => this.setState({ error: error.message }))

    console.log("data perses success. Mounted ....");
  }

  render = () => {

    let studentData = null
    if (this.state.error) {
      studentData = <h1>{this.state.error}</h1>
    }
    else {
      if (this.state.C_Student) {
        if (this.state.C_Student.length > 0) {
          studentData = (
            <div className={[styles.AllStudents, styles.container90].join(' ')}>
              <StudentSInfor info={this.state.C_Student} />
            </div>
          )
        }
        else {
          studentData = <NoData message="no records found" />
        }
      }

      else {
        studentData = <Loding1 />
      }
    }

    return (
      <Aux>
        {studentData}
      </Aux>
    )
  };
}

export default AllStudents;
