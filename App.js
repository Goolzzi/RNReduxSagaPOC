import React from 'react'

import { Provider } from 'react-redux'
import configureStore from './configureStore'
import AppRoot from './containers/AppRoot'

import 'regenerator-runtime/runtime';

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <AppRoot />
  </Provider>
)
export default App;
