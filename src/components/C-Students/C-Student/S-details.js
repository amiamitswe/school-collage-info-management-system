import React from 'react';

import { CardPanel } from 'react-materialize';

// import styles from '../../../scss/App.module.scss';

const SDetails = (props) => {
    return (
        <div className="stu-details">
            <CardPanel className="blue-grey lighten-1">
                <span className="white-text left-align">
                    <h4>Name : {props.studentName}</h4>
                    <h5>Class : {props.studentClass}</h5>
                    <h5>Passing Year : {props.passYear}</h5>
                </span>
            </CardPanel>
        </div>
    );
}

export default SDetails;