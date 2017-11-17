import * as React from 'react';
import '../css/button.css';

export class SelectButton extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    select(containerId: string){
        var range = document.createRange();
        range.selectNode(document.getElementById(containerId) as HTMLElement);

        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }

    deselect(){
        window.getSelection().removeAllRanges();
    }

    render() {
        return (
            <button className="button" onClick={ () => this.select('copyPasta') }>
                Select <i className="fa fa-i-cursor" style={{ marginLeft: 8 }}/>
                <span className="button-tooltip">because I like pressing ctrl + c on my keyboard a lot</span>
            </button>
        );
    }
}