/* eslint-disable react/prop-types */
import {Navigate} from 'react-router-dom';

const Protected = ({isLogged, children}) => {
    if (!isLogged) {
        return <Navigate to="/signup" replace />;
    } else {
        return children;
    }
};

export default Protected;
