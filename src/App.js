import React from 'react';
import { Chat } from './features/chat/Chat';
import { Entry } from './features/chat/Entry';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function Index() {
  return(
    <Router>
      <Switch>
        <Route exact path="/">
          <Entry/>
        </Route>
        <Route path="/Chat">
          <Chat/>
        </Route>
      </Switch>
    </Router>
  )
}
