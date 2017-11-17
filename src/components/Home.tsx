import * as React from 'react';
import '../css/home.css';
import { CopyButton } from "./Copy";
import { SelectButton } from "./Select";

export class Home extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <div id="copyPasta" className="copyPasta">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis lorem justo. Curabitur ut mollis justo. Curabitur ante velit, auctor sit amet erat in, maximus cursus dui. Phasellus hendrerit egestas nibh in imperdiet. Nam venenatis sit amet justo ut convallis. Vestibulum efficitur vel dui sit amet molestie. Nullam finibus augue eget sapien egestas dignissim. Integer lacinia quam sed neque eleifend, in ultricies velit sollicitudin. Donec venenatis tellus sit amet varius congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce tempor, enim sit amet pharetra fermentum, elit lectus faucibus ligula, at venenatis turpis leo consequat nunc. Sed magna enim, pretium a cursus at, iaculis in felis. Vivamus luctus pharetra justo, eu pretium sem porttitor quis. Proin dapibus purus sit amet tortor rutrum tristique. Nam at gravida erat. Ut faucibus arcu in vehicula pulvinar.</div>
                <br />
                <CopyButton />
                <SelectButton />
            </div>
        );
    }
}