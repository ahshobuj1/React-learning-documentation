import React from 'react';

export default class EvenHandler extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
        };
    }

    onChangeHandler = (e) => {
        this.setState(
            {
                value: e.target.value,
            },
            () => {
                console.log(e.target.value);
            }
        );
    };

    render() {
        const {value} = this.state;
        return (
            <div>
                <h1>Hello OnChange EventHandler</h1>
                <input type="text" onChange={this.onChangeHandler} />
                <p>{value}</p>
            </div>
        );
    }
}
bx;
