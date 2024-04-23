import React from 'react';

const Circle = (props) => {
    const {titleText, desText} = props;
    return (
        <div className="des">
            <h2 className="des_title">{titleText}</h2>
            <p>{desText}</p>
        </div>
    );
};

export default Circle;
