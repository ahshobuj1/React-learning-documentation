const Card1 = (props) => {
    const {title, desc} = props;
    return (
        <div>
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    );
};

export default Card1;
