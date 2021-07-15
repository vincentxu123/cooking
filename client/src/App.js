
import './App.css';
import Groceries from './Groceries';
import Home from './Home';
import Recipes from './Recipes';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/groceries">
            <Groceries />
          </Route>
          <Route path="/recipes">
            <Recipes />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
