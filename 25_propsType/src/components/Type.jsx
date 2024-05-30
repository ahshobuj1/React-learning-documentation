import propTypes from 'prop-types';

const Type = (props) => {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h3>Subject: {props.subject}</h3>
            <p>Id: {props.studentId}</p>
            <h3>CGPA: {props.cgpa}</h3>
            <p>User : {props.user.name}</p>
            <p> Id : {props.user.id}</p>
        </div>
    );
};

Type.propTypes = {
    name: propTypes.string,
    subject: propTypes.string,
    studentId: propTypes.number,
    cgpa: propTypes.number,

    // object propType
    user: propTypes.shape({
        name: propTypes.string,
        id: propTypes.number,
    }),
};

Type.defaultProps = {
    subject: 'The Subject is Economics',
};

export default Type;
