import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Form from '../views/form'
import Pokemon from '../views/pokemon'
import Function from '../views/function'

const Router: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => (<Redirect to="/form" />)} />
            <Route path="/form" component={Form} />
            <Route path="/pokemon" component={Pokemon} />
            <Route path="/order" component={Function} />
        </Switch>
    )
}

export default Router;