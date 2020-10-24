import React from 'react'
import { Collapsible, CollapsibleItem } from "react-materialize";

import AllStudentsHeader from './StudentInfoDetails/AllStudents-header'
import AllStudentsMiniDetails from './StudentInfoDetails/AllStudent-miniDetails'


const student = (props) => {
  return (
    <Collapsible accordion={true}>
      {props.info.map((data, key) => (

        <CollapsibleItem
          key={key}

          header={
            <AllStudentsHeader
              sId={parseInt(data.id) + 1}
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
  )
}

export default student
