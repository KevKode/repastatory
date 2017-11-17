import * as React from 'react';
import { Link } from 'react-router-dom';
import '../css/head.css';

export class Head extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <ul className="nav">
                        <li><Link to="/" className="logo">
                            <img className="logo-black" src={require("../media/images/pasta-header.png")} />
                        </Link></li>
                        <li><Link to="/one">one</Link></li>
                        <li><Link to="/two">two</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}