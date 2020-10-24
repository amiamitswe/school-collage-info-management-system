import React from 'react';
import { MediaBox } from 'react-materialize';

import styles from '../../../../scss/App.module.scss';

const SImgae = (props) => {
    return(
        <div className={styles.student_image}>
            <MediaBox className={styles.profile_img}>
                <img className="center-align" src={props.profileImg} width="250" alt="" />
            </MediaBox>
        </div>
    )
}

export default SImgae;