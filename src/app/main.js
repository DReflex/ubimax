import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home'

class Main extends React.Component{
  render(){
    return(
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </main>
    )
  }
}
export default Main
