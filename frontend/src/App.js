import React from 'react';
import CoursePlanner from './CoursePlanner';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from './Admin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/" component={CoursePlanner} />
      </Switch>
    </Router>
  );
}

export default App;
