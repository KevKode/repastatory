import * as React from 'react';
import '../css/copypasta.css';
import { CopyButton } from "./Copy";
import { SelectButton } from "./Select";
import { Upvote } from "./Upvote"

interface CopyPastaProps {
    upvotes: number;
    title: string;
    text: string;
}

interface CopyPastaState {
    upvotes: number;
    title: string;
    text: string;
}

export class CopyPasta extends React.Component<CopyPastaProps, CopyPastaState> {
    constructor(props: any) {
        super(props);
        this.state = { upvotes: this.props.upvotes, title: this.props.title, text: this.props.text };
    }

    render() {
        return (
            <div>
                <h1 className="title">{ this.state.title }</h1>
                <Upvote upvotes={ this.state.upvotes }/>
                <div id="copyPasta" className="copyPasta">{ this.state.text }</div>
                <br />
                <CopyButton />
                <SelectButton />
            </div>
        );
    }
}