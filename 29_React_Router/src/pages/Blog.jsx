import BlogData from '../components/data';
import {Link} from 'react-router-dom';
import '../App.css';

const truncateString = (str, num) => {
    if (str.length > num) {
        return str.slice(0, num) + '...';
    } else {
        return str;
    }
};

const Blog = () => {
    return (
        <div className="blog_flex">
            {BlogData.map((data) => {
                const {id, title, body} = data;

                return (
                    <article id="section" key={id}>
                        <h3>{data.title}</h3>
                        <p>{truncateString(body, 100)}</p>
                        <Link to={title} state={(id, title, body)}>
                            Learn more
                        </Link>
                    </article>
                );
            })}
        </div>
    );
};

export default Blog;
