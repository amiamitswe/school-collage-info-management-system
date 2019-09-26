import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Home from '../components/Home';
import Login from '../components/Login';
import AllStudents from '../components/AllStudents2';
import Student from '../components/Student';
import PageNotFound from '../components/PageNotFound';

import '../scss/materialize.scss';
import styles from '../scss/App.module.scss';

class App extends Component {

  state = {
    "C_Student": null
  }

  render = () => {
    return (
      <div className={`${styles.container} ${styles.App} `}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path='/' component={Home} exact={true} />
            <Route path='/Student' component={Student} exact={true} />
            <Route path='/AllStudents' component={AllStudents} exact={true} />
            <Route path='/Login' component={Login} exact />
            <Route component={PageNotFound} />

            {/* <Route path='/AllStudents' render={() => <AllStudents 
                allStudent={this.state.C_Student} 
                isAuthed={true}  exact={true}/> }/> */}
          </Switch>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;
