import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Home from './components/pages/Home';
import NoMatch from './components/shared/NoMatch';
import Lessons from './components/pages/Lessons';
import Lesson from './components/pages/Lesson';
import CodingI from './components/pages/CodingI';
import CodingII from './components/pages/CodingII';
import Assignments from './components/pages/Assignments';
import Resources from './components/pages/Resources';
import Calendar from './components/pages/Calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="main">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/codingI-lessons' component={CodingI} />
            <Route exact path='/codingII-lessons' component={CodingII} />
            <Route exact path='/lessons' component={Lessons} />
            <Route path='/codingI-lessons/:id' component={Lesson} />
            <Route path='/codingII-lessons/:id' component={Lesson} />
            <Route exact path='/assignments' component={Assignments} />
            <Route exact path='/resources' component={Resources} />
            <Route exact path='/calendar' component={Calendar} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
