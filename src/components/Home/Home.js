import React from 'react';
import Slider from '../Slider/Slider';
import classes from './Home.module.scss'

const Home = () => {
    return(
        <div>
            <h1 className={classes.HomeTitle}>Harta High School And College</h1>
            <Slider />
        </div>
    )
}

export default Home;