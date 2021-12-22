import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Rules from './rules'
import Game from './colorGame'

export default function () {
    return(
        <div>
            <Switch>
                <Route exact path='/rules' component={Rules}/>
                <Route exact path='/gameColor' component={Game}/>
            </Switch>
        </div>
    )
}