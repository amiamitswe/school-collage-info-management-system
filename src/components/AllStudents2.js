import React, { Component } from 'react';

import { Collapsible, CollapsibleItem } from 'react-materialize';

import AllStudentsHeader from './C-AllStudents/AllStudents-header';
import AllStudentsMiniDetails from './C-AllStudents/AllStudent-miniDetails';

import {Loding1} from '../components/Loading';

import {NoData} from '../components/Alert';

import Student from '../components/Student2';

import styles from '../scss/App.module.scss';

class AllStudents extends Component {

    state = {
        "C_Student" : null,
        "show_singal_student": false,
        "singal_student_info" : []
    }

    componentDidMount() {
        fetch("https://my-json-server.typicode.com/amiamitswe/myjson/sms")
            .then(response => response.json())
            .then(data => this.setState({ C_Student: data.C_Student }));

        console.log('data perses success. Mounted ....');
    }

    handel = () => {
        return (
            this.setState(
                {
                    show_singal_student: !this.state.show_singal_student, 
                    singal_student_info : this.state.C_Student[0]
                }
            )
        )
    }

    render = () => {
        //console.log(singal_student_info);
        try {
            return (
                
                (this.state.show_singal_student) ? 
                <Student
                    name = {this.singal_student_info.name}
                    class = {this.singal_student_info.class}
                    year = {this.singal_student_info.passing_year}
                    img = {this.singal_student_info.img_url}
                    address = {this.singal_student_info.address}
                    mobile = {this.singal_student_info.mobile}
                    email = {this.singal_student_info.email}
                /> 
                : ((this.state.C_Student.length !== 0) ? 
                    ( <div className={styles.AllStudents}>
                        <Collapsible accordion={true} className="ddddd">
                            {
                                this.state.C_Student.map((data, key) => (
                                    <CollapsibleItem
                                        key={key}
                                        header={
                                            <AllStudentsHeader
                                                sId={key + 1}
                                                sNane={data.name}
                                                sImage={data.img_url}
                                            />
                                        }
                                    >
                                        <AllStudentsMiniDetails
                                            sId={key}
                                            sClass={data.class}
                                            sGroup={data.group}
                                            sPassYear={data.passing_year}
                                            onClickHanel = {this.handel}
                                        />
                                    </CollapsibleItem>
                                ))
                            }
    
                        </Collapsible>
    
                    </div>
                ) 
                : <NoData message = "no records found" />)
            );
        }
        catch(e) {
            console.log(e);
            return(
                <Loding1 />
            )
        }
    }
}

export default AllStudents; 