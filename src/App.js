import React from 'react';
import { injectGlobal } from 'emotion';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import IssuePage from './components/IssuePage';

injectGlobal`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  body {
    background-color: #ebeff1;
    margin: 0;
    padding: 0;
  }
`;

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:userName/:repoName/issue/:id" component={IssuePage} />
    </Switch>
  </Router>
);

export default App;
