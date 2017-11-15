import * as React from 'react';
import '../css/Hello.css';

interface Props {
    name?: string;
    exclaim: number;
}

interface State {
    name?: string;
    exclaim: number;
}

export class Hello extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = { name: this.props.name, exclaim: this.props.exclaim };
    }

    render() {
        return (
            <div className="hello">
                <div className="greeting">
                    Hello {this.state.name + getExclamationMarks(this.state.exclaim)}
                </div>
            </div>
        );
    }
}

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}