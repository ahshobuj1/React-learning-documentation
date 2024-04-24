import React from 'react';

export default class State extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };

    decrement = () => {
        this.setState({
            count: this.state.count - 1,
        });
    };

    render() {
        const {count} = this.state;

        return (
            <div>
                <h2>Count : {count}</h2>
                <button onClick={this.increment}>Increment+</button>
                <button
                    onClick={this.decrement}
                    disabled={count === 0 ? true : false}>
                    Decrement-
                </button>
            </div>
        );
    }
}
