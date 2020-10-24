import React, { Component } from "react";
import axios from '../../../hoc/axios-order'
import { Row, Col } from "react-materialize";

import Aux from '../../../hoc/Aux'
import { Loding1 } from '../../Utilities/Loading'
import SImage from "./StudentInfo/S-image";
import SDetails from "./StudentInfo/S-details";
import SOtherDetails from "./StudentInfo/S-other-details";

import styles from "../../../scss/App.module.scss";

class Student extends Component {
  state = {
    C_student: null,
    error: null
  };

  componentDidMount() {
    if (this.props.match.params.id > 0) {
      axios.get(`sms`)
        .then(res => res.data.C_Student[res.data.C_Student
          .findIndex(el => el.id === parseInt(this.props.match.params.id))])
        .then(el => this.setState({ C_student: el }))
        .catch(error => this.setState({ error: error.message }))
    }
  }

  render = () => {
    let studentDetails = null

    if (this.state.error) {
      studentDetails = <h1>{this.state.error}</h1>
    }
    else {
      if (this.state.C_student) {
        studentDetails = (
          <div className={`${styles.student_info} teal lighten-5`}>
            <h2 className={styles.student_heading}>Student Details</h2>

            <Row>
              <Col l={3} m={12} s={12} className="" >
                <SImage profileImg={this.state.C_student.img_url} />
              </Col>
              <Col l={6} m={12} s={12} className="white-text" >
                <SDetails
                  studentName={this.state.C_student.name}
                  studentClass={this.state.C_student.class}
                  passYear={this.state.C_student.passing_year}
                  group={this.state.C_student.group}
                />
              </Col>
              <Col l={3} m={12} s={12} className="teal-text">
                <SOtherDetails
                  studentAddress={this.state.C_student.address}
                  studentMobile={this.state.C_student.mobile}
                  studentEmail={this.state.C_student.email}
                />
              </Col>
            </Row>

          </div>
        )
      }
      else {
        studentDetails = <Loding1 />
      }
    }

    return (
      <Aux>
        {studentDetails}
      </Aux>
    );
  };
}

export default Student;
