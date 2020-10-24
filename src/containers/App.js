import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../components/HeaderFooter/Header";
import Home from "../components/Home/Home";
import Login from "../components/AccessControl/Login";
import AllStudents from "../components/Students/AllStudents";
import Student from "../components/Students/Student/Student";
import Footer from '../components/HeaderFooter/Footer'
import PageNotFound from "../components/Utilities/PageNotFound";

import "../scss/materialize.scss";
import styles from "../scss/App.module.scss";

class App extends Component {
  state = {
    C_Student: null,
  };

  render = () => {
    return (
      <div className={`${styles.container} ${styles.App} `}>
        <BrowserRouter>
          <Header />
          <div className={styles.Content}>
          <Switch >
            <Route path="/" component={Home} exact={true} />
            <Route path='/student/:id' component={Student}/>
            <Route path="/AllStudents" component={AllStudents} exact={true} />
            <Route path="/Login" component={Login} exact />
      
            <Route component={PageNotFound} />
          </Switch>
          </div>

<Footer />
        </BrowserRouter>
      </div>
    );
  };
}

export default App;
