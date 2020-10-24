import classes from './Footer.module.scss'
import React from 'react'

const footer = () => {
    return (
       <footer>
           <p className={classes.Footer}>2020 &copy; Amit Samadder with <span role="img" aria-label="love">❤️</span></p>
       </footer>
    )
}

export default footer
