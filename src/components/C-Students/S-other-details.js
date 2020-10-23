import React from "react";
import { Collapsible, CollapsibleItem, Icon } from "react-materialize";

import styles from "../../scss/App.module.scss";

const SOtherDetails = (props) => {
  return (
    <div className={styles.stu_other_details}>
      <Collapsible accordion={true}>
        <CollapsibleItem header="Address" icon={<Icon>my_location</Icon>}>
          {props.studentAddress}
        </CollapsibleItem>

        <CollapsibleItem header="Mobile No" icon={<Icon>call</Icon>}>
          <table>
            <thead>
              <tr>
                <th>Mobile Numbers</th>
              </tr>
            </thead>
            <tbody>
              {props.studentMobile.map((mobile, index) => (
                <tr key={index}>
                  <td>{mobile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CollapsibleItem>

        <CollapsibleItem header="Email ID" icon={<Icon>email</Icon>}>
          <table>
            <thead>
              <tr>
                <th>Email Id's</th>
              </tr>
            </thead>
            <tbody>
              {props.studentEmail.map((email, index) => (
                <tr key={index}>
                  <td>
                    <a href="mailto:{email}">{email}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CollapsibleItem>
      </Collapsible>
    </div>
  );
};

export default SOtherDetails;
