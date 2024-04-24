import React from 'react';
import LogInPage from './LogInPage';
import HomePage from './HomePage';

export default class Condition extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            IsLoggedIn: true,
        };
    }

    render() {
        const {IsLoggedIn} = this.state;

        return <div>{IsLoggedIn ? <HomePage /> : <LogInPage />}</div>;
    }
}

//* short circuit
/* export default class Condition extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            IsLoggedIn: false,
        };
    }

    render() {
        const {IsLoggedIn} = this.state;

        return <div>{(IsLoggedIn && <HomePage />) || <LogInPage />}</div>;
    }
} */

//* if - else
/* export default class Condition extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            IsLoggedIn: false,
        };
    }

    render() {
        const {IsLoggedIn} = this.state;

        if (IsLoggedIn) {
            return <HomePage />;
        } else {
            return <LogInPage />;
        }
    }
} */
