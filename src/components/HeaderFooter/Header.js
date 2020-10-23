import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { TextInput, Navbar, NavItem } from 'react-materialize';
import MaterialIcon  from 'material-icons-react';

import logo from '../../assets/img/sms.png';

import styles from '../../scss/App.module.scss';

const Header = () => {
    return (
        <Navbar brand={<Link to="/"><img src={logo}  alt="Logo"/></Link>} alignLinks="right">
            <NavItem><TextInput placeholder="Your Query ..." /></NavItem>
            <NavLink to="/" activeClassName={styles.activeClass} exact={true}>Home</NavLink>
            <NavLink to="/AllStudents" activeClassName={styles.activeClass}>AllStudents</NavLink>
            <NavLink to="/Teacher" activeClassName={styles.activeClass}>Teacher</NavLink>
            <NavLink to="/A-Teacher" activeClassName={styles.activeClass}>A-Teacher</NavLink>
            <NavLink to="/Login" activeClassName={styles.activeClass}>Login</NavLink>
            <MaterialIcon icon="&nbsp;"></MaterialIcon>
        </Navbar>
    );
};

export default Header;