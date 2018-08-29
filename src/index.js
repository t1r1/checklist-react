import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import CssBaseline from "@material-ui/core/CssBaseline";

import App from "./containers/App/App";

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <CssBaseline>
          <Component />
        </CssBaseline>
      </Router>
    </Provider>,
    document.getElementById("root")
  );
};

render(App);
