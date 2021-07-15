
import './App.css';
import Groceries from './Groceries';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/">
           <Groceries />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
