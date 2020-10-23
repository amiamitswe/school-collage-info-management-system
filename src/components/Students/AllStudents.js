import React, { Component } from "react";
import axios from '../../hoc/axios-order'
import { Collapsible, CollapsibleItem } from "react-materialize";

import Aux from '../../hoc/Aux'
import AllStudentsHeader from "../C-AllStudents/AllStudents-header";
import AllStudentsMiniDetails from "../C-AllStudents/AllStudent-miniDetails";
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
              <Collapsible accordion={true}>
                {this.state.C_Student.map((data, key) => (
                  <CollapsibleItem
                    key={key}
                    header={
                      <AllStudentsHeader
                        sId={key + 1}
                        sNane={data.name}
                        sClass={data.class}
                        sRoll={data.id}
                        sImage={data.img_url}
                      />
                    }
                  >
                    <AllStudentsMiniDetails
                      sClass={data.class}
                      sGroup={data.group}
                      sPassYear={data.passing_year}
                      sId={data.id}
                    />

                  </CollapsibleItem>

                ))}
              </Collapsible>
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
