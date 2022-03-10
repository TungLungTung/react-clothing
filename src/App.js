import logo from './logo.svg';
import './App.css';

/// Switch and Route is component
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

/// Create example Component to using Route
const HatsPage = () => {
  return(
    <div>
      <h1>Hello Hats</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact="true" path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
