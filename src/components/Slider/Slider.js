import React from 'react';
import { Slider, Slide, Caption } from 'react-materialize';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

import img1 from '../../assets/carousel/1.JPG';
import img2 from '../../assets/carousel/2.JPG';
import img3 from '../../assets/carousel/3.JPG';
import img4 from '../../assets/carousel/4.JPG';

const slider = () => {

    return (

        <Slider>
            <Slide image={<img src={img1} alt='' />}>
                <Caption>
                    <h3>This is our big Tagline!</h3>
                    <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                </Caption>
            </Slide>
            <Slide image={<img src={img2} alt='' />}>
                <Caption placement="left">
                    <h3>Left Aligned Caption</h3>
                    <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                </Caption>
            </Slide>
            <Slide image={<img src={img3} alt='' />}>
                <Caption>
                    <h3>This is our big Tagline!</h3>
                    <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                </Caption>
            </Slide>
            <Slide image={<img src={img4} alt='' />}>
                <Caption placement="left">
                    <h3>Left Aligned Caption</h3>
                    <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                </Caption>
            </Slide>
        </Slider>
    );

}

export default slider;

