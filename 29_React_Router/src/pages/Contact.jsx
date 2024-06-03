import {useNavigate} from 'react-router-dom';

const Contact = () => {
    let Navigate = useNavigate();

    return (
        <div>
            <h3>Contact Page</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                neque, deserunt adipisci dolore illo explicabo quisquam vero
                doloribus ipsa quia optio, veniam, doloremque maxime laudantium
                reiciendis modi dolorem cum suscipit ut. Iusto ducimus suscipit
                laborum magni delectus consectetur dolore quam, tenetur animi
                veniam quidem illo, mollitia nobis consequuntur, autem aut.
            </p>

            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloribus accusantium omnis fuga est magni maxime alias
                praesentium quidem magnam maiores eius impedit minima, aut sint,
                illo obcaecati nihil ullam vel.
            </p>

            <button onClick={() => Navigate('/')}>Back to Home</button>
        </div>
    );
};

export default Contact;
