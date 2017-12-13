import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { CopyPasta } from './CopyPasta';
import { FourOhFour } from './404';
import { array_of_copypastas } from "./Databse"
import '../css/body.css';

export class Body extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' render={()=><Home />} />
                    {
                        array_of_copypastas.map((copypasta) =>
                            <Route
                                key={ copypasta.id }
                                exact path={ '/' + copypasta.id }
                                render={()=><CopyPasta
                                    upvotes={ copypasta.upvotes }
                                    title={ copypasta.title }
                                    text={ copypasta.text }
                                />}
                            />
                        )
                    }
                    <Route render={()=><FourOhFour />} />
                </Switch>
            </main>
        );
    }
}
