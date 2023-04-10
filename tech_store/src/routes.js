import React from "react";
import {Switch, Route} from "react-router";

import AllPhones from './container/phones';
import PhoneUnit from "./container/phone-unit/phoneUnit";
import Basket from "./container/basket/basket";

export default (
    <Switch>
        <Route path='/' component={AllPhones} exact />
        <Route path='/categories/:id' component={AllPhones} />
        <Route path='/basket' component={Basket} />
        <Route path='/phone/:id' component={PhoneUnit} />
    </Switch>
)