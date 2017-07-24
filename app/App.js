import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { Router, Scene, ActionConst } from 'react-native-router-flux';

import { appReducer } from './Reducers/index';

import Home from './Scenes/Home/index';
import Units from './Scenes/Units/index';

const store = createStore(appReducer);
const ConnectedRouter = connect()(Router);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter>
          <Scene key='root'>
            <Scene key='home' component={Home} title='Home' type={ActionConst.REPLACE} initial />
            <Scene key='units' component={Units} title='Units' />
          </Scene>
        </ConnectedRouter>
      </Provider>
    );
  }
}
