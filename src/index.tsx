import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route, Router} from "react-router-dom"
import {Provider} from "react-redux"
import registerServiceWorker from './registerServiceWorker';
import store from "./store"
import {history} from "helpers"
import {Application} from "modules/Application";
import {Humans} from "modules/Humans"



store.subscribe(() => {
  const s = store.getState();
  if (localStorage.getItem("humans") !== JSON.stringify(s.humans)) {
    localStorage.setItem("humans", JSON.stringify(s.humans));
  }
})


ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Application>
          <Switch>
            <Route exact path="/humans" component={Humans} />,
          </Switch>
        </Application>
      </Router>
    </Provider>
    , document.getElementById("root")
);

registerServiceWorker();
