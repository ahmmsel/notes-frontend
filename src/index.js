import { render } from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"

import "./index.scss"
import App from "./App"
import store from "./app/"

render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
)