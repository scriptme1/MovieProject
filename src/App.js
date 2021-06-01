import React from 'react';
import MoviePage from './pages/MoviePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MoviePlayer from './pages/MoviePlayer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
function App() {
  return (
    <Router>
       <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies/:movieId"component={MoviePage} exact />
          <Route path="/movie/:movieId" component={MoviePlayer} exact  />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
