import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

const Routes = () => {
  return (
    <Switch>
        <Route exact path='/colors'>
            <ColorList />
        </Route>
        <Route exact path='/colors/:color'>
            <Color color={color}/>
        </Route>
        <Route exact path='/'>
            <Home />
        </Route>
    </Switch>
  )
}

export default Routes