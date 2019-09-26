import React from 'react';
import { Row, Col } from 'react-materialize';

import SImage from './C-Students/C-Student/S-image';
import SDetails from './C-Students/C-Student/S-details';
import SOtherDetails from './C-Students/C-Student/S-other-details';

import styles from '../scss/App.module.scss';

const Student = (props) =>  {
        return (
            <div className={`${styles.student_info} teal lighten-5`}>
                <h2 className={styles.student_heading}>Student Details</h2>
    
                <Row>
                    <Col l={3} m={12} s={12} className="">
                        <SImage 
                            profileImg={props.img}
                        />
                    </Col>
                    <Col l={6} m={12} s={12} className="white-text">
                        <SDetails 
                            studentName = {props.name}
                            studentClass = {props.class}
                            passYear = {props.year}
                        />
                    </Col>
                    <Col l={3} m={12} s={12} className="teal-text">
                        <SOtherDetails
                            studentAddress = {props.address}
                            studentMobile = {props.mobile}
                            studentEmail = {props.email}
                        />
                    </Col>
    
                </Row>
            </div>
        );
    }


export default Student;