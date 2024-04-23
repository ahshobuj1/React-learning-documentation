import React from 'react';

class Card2 extends React.Component {
    render() {
        const {title, desc} = this.props;
        return (
            <div>
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        );
    }
}

export default Card2;
