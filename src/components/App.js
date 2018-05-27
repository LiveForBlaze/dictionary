import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';

import rootReducer from '../reducers/index';

import Home from './Home';

const store = createStore(rootReducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path="/" component={Home}/>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
