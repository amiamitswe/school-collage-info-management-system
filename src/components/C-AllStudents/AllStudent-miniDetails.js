import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Table, Button, Icon } from 'react-materialize';

import styles from '../../scss/App.module.scss';

class AllStudentsMiniDetails extends Component {
  render() {
    return (
      <Table className={`${styles.students_mini_details} striped`}>
        <thead>
          <tr>
            <th data-field="name">Class</th>
            <th data-field="group">Group</th>
            <th data-field="passing_year">
              <span className={styles.PYearD}>Passing year</span>
              <span className={styles.PYearM}>Year</span>
            </th>
            <th data-field="action">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.props.sClass}</td>
            <td>{this.props.sGroup}</td>
            <td>{this.props.sPassYear}</td>
            <td data-field="linl">
              <Link to={'/student/' + this.props.sId}>
                <Button waves="light" className={styles.go_btn}>
                  View Details
                  <Icon right>send</Icon>
                </Button>
              </Link>
            </td>
          </tr>

        </tbody>

      </Table>
    );
  }
}

export default AllStudentsMiniDetails;