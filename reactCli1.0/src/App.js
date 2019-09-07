import React from 'react';
import { BrowserRouter  as Router } from "react-router-dom";
import RouterFun from './router/routerFun';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { Provider } from 'react-redux';
import {store} from './redux/store/store.js';

function App() {
  return (
    <Provider store={store} >
      <Router>
        <ScrollToTop>
          <RouterFun></RouterFun>
        </ScrollToTop>
      </Router>
    </Provider>
  );
}

export default App;
