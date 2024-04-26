import React from 'react';

export default class HooksClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }
    render() {
        return (
            <div>
                <h1>Class Components</h1>
                <h2>Count : {this.state.count}</h2>
                <button
                    onClick={() => {
                        this.setState({count: this.state.count + 1});
                    }}>
                    Increment++
                </button>
            </div>
        );
    }
}
