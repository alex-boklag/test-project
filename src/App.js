import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from './components/Login';
import { Home } from './components/Home';
import { reducer } from './reducers/auth-reducer';
import { initialState } from './store/store';

export const Context = React.createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/home' component={Home} />       
        </Switch>
      </Router>
    </Context.Provider>
  );
}

export default App;
