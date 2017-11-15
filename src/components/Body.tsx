import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { One } from './One';
import { Two } from './Two';
import { Home } from './Home';
import { FourOhFour } from './404';
import '../css/body.css';

export class Body extends React.Component {
    render() {
        return (
            <div className="body">
                <Switch>
                    <Route path='/home' render={()=><Home />} />
                    <Route path='/one' render={()=><One />} />
                    <Route path='/two' render={()=><Two />} />
                    <Route render={()=><FourOhFour />} />
                </Switch>
            </div>
        );
    }
}
