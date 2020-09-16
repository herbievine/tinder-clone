import React from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Home from './modules/Home'
import Messages from './modules/Messages'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => (
    <div className="app">
        <Navigation />
        <Router>
            <Switch>
                <Route path="/messages">
                    <MessagesRouter />
                </Route>
                <Route path="/">
                    <HomeRouter />
                </Route>
            </Switch>
        </Router>
    </div>
)

const HomeRouter = () => <Home />
const MessagesRouter = () => <Messages />

export default App
