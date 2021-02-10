import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './Home/Home.js';
import { Navbar } from './Components/Navbar/Navbar.js';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/gallery">
            <div>Gallery</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
