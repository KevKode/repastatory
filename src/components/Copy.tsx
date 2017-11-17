import * as React from 'react';
import '../css/button.css';

export class CopyButton extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    copy(containerId: string){
        var range = document.createRange();
        range.selectNode(document.getElementById(containerId) as HTMLElement);

        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        document.execCommand("Copy");
        window.getSelection().removeAllRanges();

        this.flashElement(containerId);
    }

    flashElement(containerId: string) {
        var element = document.getElementById(containerId) as HTMLElement;
        element.classList.add("flash");
        setTimeout( function () {
            element.classList.remove("flash");
        }, 250, element);
    }

    render() {
        return (
            <button className="button" onClick={ () => this.copy('copyPasta') }>
                Copy <i className="fa fa-files-o" style={{ marginLeft: 5 }}/>
            </button>
        );
    }
}