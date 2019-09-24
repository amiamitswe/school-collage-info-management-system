import React from 'react';

import { Collapsible, CollapsibleItem } from 'react-materialize';

import AllStudentsHeader from './C-AllStudents/AllStudents-header';
import AllStudentsMiniDetails from './C-AllStudents/AllStudent-miniDetails';

import styles from '../scss/App.module.scss';

const AllStudents = (props) => {
    
       try {
        return (
            <div className={styles.AllStudents}>
            
                <Collapsible accordion={true}>
                    {
                        
                        props.allStudent.map((data,key) => (
                            <CollapsibleItem
                                key={key}
                                header={
                                    <AllStudentsHeader 
                                        sId = {key + 1}
                                        sNane = {data.name}
                                        sImage = {data.img_url}
                                    />
                                }
                            >
                                <AllStudentsMiniDetails
                                    sClass = {data.class}
                                    sGroup = {data.group}
                                    sPassYear = {data.passing_year}
                                />
                            </CollapsibleItem>
                        ))
                    }
                    
                </Collapsible>

            </div>

        );
       }
       catch(e) {
           console.log(e);       }
    
}

export default AllStudents; 