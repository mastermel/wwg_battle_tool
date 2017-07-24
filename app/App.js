import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { Router, Scene, ActionConst } from 'react-native-router-flux';

import { appReducer } from './Reducers/index';

import { navColor, font } from './Shared/Styles';

import Home from './Scenes/Home/index';
import Units from './Scenes/Units/index';

const store = createStore(appReducer);
const ConnectedRouter = connect()(Router);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter>
          <Scene key='root'
            navigationBarStyle={styles.navigationBarStyle}
            navBarButtonColor={font.color}
            titleStyle={styles.titleStyle}
          >
            <Scene key='home'
              initial
              title='Home'
              component={Home}
              type={ActionConst.REPLACE}
            />
            <Scene key='units'
              title='Units'
              component={Units}
            />
          </Scene>
        </ConnectedRouter>
      </Provider>
    );
  }
}

const styles = {
  navigationBarStyle: {
    backgroundColor: navColor,
  },
  
  titleStyle: {
    color: font.color,
  },
};
