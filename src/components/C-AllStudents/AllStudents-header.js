import React from 'react';
import { Table } from 'react-materialize';

import styles from '../../scss/App.module.scss';

const AllStudentsHeader = (props) => {

    return (
        <Table className={`${styles.students} striped`}>
            <tbody>
                <tr>
                    <td data-field="id">{props.sId}</td>
                    <td data-field="name">{props.sNane}</td>
                    <td data-field="img"><img src={props.sImage} alt="" /></td>
                </tr>
            </tbody>
        </Table>
    )
}

export default AllStudentsHeader;