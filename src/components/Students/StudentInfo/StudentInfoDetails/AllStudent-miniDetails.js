import React from 'react';
import { Table, Button, Icon } from 'react-materialize';

import { withRouter } from 'react-router-dom'
import styles from '../../../../scss/App.module.scss';

const AllStudentsMiniDetails = (props) => {

  const test = () => {
    props.history.push({ pathname: '/student/' + props.sId })
  }

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
          <td>{props.sClass}</td>
          <td>{props.sGroup}</td>
          <td>{props.sPassYear}</td>
          <td data-field="linl">
            <Button waves="light" className={styles.go_btn} onClick={test}>
              View Details
                <Icon right>send</Icon>
            </Button>
          </td>
        </tr>
      </tbody>

    </Table>
  );
}


export default withRouter(AllStudentsMiniDetails);