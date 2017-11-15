import * as React from 'react';
import { Body } from './Body';
import { Head } from './Head';

export class App extends React.Component {
    render() {
        return (
            <div>
                <Head />
                <Body />
            </div>
        );
    }
}