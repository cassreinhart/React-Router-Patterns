import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

const Routes = () => {
  return (
    <Switch>
        <Route exact path='/colors'>
            <ColorList />
        </Route>
    </Switch>
  )
}

export default Routes