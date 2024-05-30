import {Component} from 'react';

//* Mounting -> constructor -> render -> componentDidMount
//* Updating -> state/props -> render
//* Unmounting ->

export default class App extends Component {
    //rconst
    constructor(props) {
        super(props);
        console.log('constructor');

        this.state = {
            count: 0,
        };
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    render() {
        {
            console.log('render');
        }
        return (
            <div>
                <h1>Life cycle</h1>
                <h2>Count : {this.state.count}</h2>
                <button
                    onClick={() => {
                        this.setState({
                            count: this.state.count + 1,
                        });
                    }}>
                    +
                </button>
            </div>
        );
    }
}
