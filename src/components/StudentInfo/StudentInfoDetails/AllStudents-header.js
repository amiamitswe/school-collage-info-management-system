import React from "react";
import { Table } from "react-materialize";

import styles from "../../../scss/App.module.scss";

const AllStudentsHeader = (props) => {
  return (
    <Table className={`${styles.students} striped`}>
      <tbody>
        <tr >
          <td data-field="id">{props.sId}</td>
          <td data-field="name" className={styles.Name}>{props.sNane}</td>
          <td data-field="class" className={styles.Class}>{props.sClass}</td>
          <td data-field="roll" className={styles.Roll}>{`Roll No: ${props.sRoll}`}</td>
          <td data-field="img">
            <img src={props.sImage} alt={styles.Name} />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default AllStudentsHeader;
