import * as React from 'react';
import { Link } from 'react-router-dom';
import '../css/head.css';
import { array_of_copypastas } from "./Databse";

export class Head extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <ul className="nav">
                        <li><Link to="/" className="logo">
                            <img className="logo-black" src={require("../media/images/pasta-header.png")} />
                        </Link></li>
                        {
                            array_of_copypastas.map(function(copypasta) {
                                return <li key={ copypasta.id }><Link to={ '/' + copypasta.id }>{ copypasta.title }</Link></li>
                            })
                        }
                        <li><Link to="/404">404</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}