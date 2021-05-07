import './App.css'
import './bootstrap.min.css'
import AddTodo from './components/AddTodo'
import List from './components/List'
import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
class App extends PureComponent {
  render() {
  const log = false;
  console.log(this.props)
    return (
      <Router>
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <ul>
                  <li className="menu-item"><Link to="/home">home</Link></li>
                  <li className="menu-item"><Link to="/app">app</Link></li>
                </ul>
              </div>
              <div className="col-md-9">
                <div className="todo-app">
                  <div className="todo-header">
                    <h3>Todo app</h3>
                  </div>
                  <div className="content">
                    <Switch>
                      <Route exact path="/home">
                        <h3>Wellcome to app todo</h3>
                      </Route>
                      <Route exact path="/app">
                        <AddTodo />
                        <List />
                      </Route>
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}
export default App;
