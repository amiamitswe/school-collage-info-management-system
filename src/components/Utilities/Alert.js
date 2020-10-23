import React from 'react';

import styles from '../../scss/App.module.scss';

export const NoData = (props) => (
    <div className={styles.nodata}>{props.message}</div>
);