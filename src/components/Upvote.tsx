import * as React from 'react';
import '../css/upvote.css';


interface CopyPastaProps {
    upvotes: number;

}

interface CopyPastaState {
    upvotes: number;
    upvoted: boolean;
    downvoted: boolean;
}

export class Upvote extends React.Component<CopyPastaProps, CopyPastaState> {
    constructor(props: any) {
        super(props);
        this.state = {
            upvotes: this.props.upvotes,
            upvoted: false,
            downvoted: false
        };
    }

    upvote(){
        this.setState({
            upvotes: this.state.upvotes + 1 ,
            upvoted: true,
            downvoted: false,
        });
    }

    downvote(){
        this.setState({
            upvotes: this.state.upvotes - 1 ,
            upvoted: false,
            downvoted: true,
        });
    }

    removeUpvote() {
        this.setState({
            upvotes: this.state.upvotes - 1 ,
            upvoted: false,
            downvoted: false,
        });
    }

    removeDownvote() {
        this.setState({
            upvotes: this.state.upvotes + 1 ,
            upvoted: false,
            downvoted: false,
        });
    }

    render() {

        if (this.state.upvoted) {
            return (
                <div className="voting">
                    <i className="fa fa-arrow-circle-o-up fa-2x vote-button_selected" onClick={ () => this.removeUpvote() }/>
                    <div className="upvotes">{ this.state.upvotes }</div>
                    <i className="fa fa-arrow-circle-o-down fa-2x vote-button_disabled" />
                </div>
            );
        }
        else if (this.state.downvoted){
            return (
                <div className="voting">
                    <i className="fa fa-arrow-circle-o-up fa-2x vote-button_disabled" />
                    <div className="upvotes">{ this.state.upvotes }</div>
                    <i className="fa fa-arrow-circle-o-down fa-2x vote-button_selected" onClick={ () => this.removeDownvote() }/>
                </div>
            );
        }

        else {
            return (
                <div className="voting">
                    <i className="fa fa-arrow-circle-o-up fa-2x vote-button" onClick={ () => this.upvote() }/>
                    <div className="upvotes">{ this.state.upvotes }</div>
                    <i className="fa fa-arrow-circle-o-down fa-2x vote-button" onClick={ () => this.downvote() }/>
                </div>
            );
        }
    }
}