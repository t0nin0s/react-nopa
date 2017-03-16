import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../../views/home/home'
import ChooseBank from '../../views/chooseBank/chooseBank'
import Statement from '../../views/statement/statement'
import Login from '../../views/login/login'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/bank' component={ChooseBank} />
    <Route path='/statement' component={Statement} />
    <Route path='/login' component={Login} />
  </Switch>
)

export default Routes
