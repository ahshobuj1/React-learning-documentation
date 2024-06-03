/* import BlogData from '../components/data';
import {useEffect, useState} from 'react'; */
import {useParams, useNavigate, useLocation} from 'react-router-dom';

const LearnBlog = () => {
    const {title} = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    /* const [data, setData] = useState('');*/
    /* useEffect(() => {
        let filtered = BlogData.filter((data) => data.title === title);
        setData(filtered[0].body);
    }, []); */

    return (
        <div>
            <h2>{title} Page</h2>
            <p>{location.state.slice(0, 200)}</p>
            <p>{location.state.slice(201, 5000)}</p>
            <button onClick={() => navigate('/blog')}>Previous</button>
        </div>
    );
};

export default LearnBlog;
