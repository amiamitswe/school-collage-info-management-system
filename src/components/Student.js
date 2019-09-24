import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';

import SImage from './C-Students/C-Student/S-image';
import SDetails from './C-Students/C-Student/S-details';
import SOtherDetails from './C-Students/C-Student/S-other-details';

import styles from '../scss/App.module.scss';

class Student extends Component {

    state = {
        C_student:{
          name: 'Amit Samadder',
          class: 'B.Sc Engineer',
          year: 2018,
          img: 'https://materializecss.com/images/sample-1.jpg',
          address: 'Rajapur, Harta, Wazirpur, Barisal',
          mobile: ['01917784210', '01714853911', '01617784210'],
          email: ['amiamitswe@gmail.com', 'amiamitswe@hotmail.com','amiamitswe@yahoo.com']
        }
      }

    render =() => {
        return (
            <div className={`${styles.student_info} teal lighten-5`}>
                <h2 className={styles.student_heading}>Student Details</h2>
    
                <Row>
                    <Col l={3} m={12} s={12} className="">
                        <SImage 
                            profileImg={this.state.C_student.img}
                        />
                    </Col>
                    <Col l={6} m={12} s={12} className="white-text">
                        <SDetails 
                            studentName = {this.state.C_student.name}
                            studentClass = {this.state.C_student.class}
                            passYear = {this.state.C_student.year}
                        />
                    </Col>
                    <Col l={3} m={12} s={12} className="teal-text">
                        <SOtherDetails
                            studentAddress = {this.state.C_student.address}
                            studentMobile = {this.state.C_student.mobile}
                            studentEmail = {this.state.C_student.email}
                        />
                    </Col>
    
                </Row>
            </div>
        );
    }
};

export default Student;