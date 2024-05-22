/* eslint-disable react/prop-types */
import React, {useState} from 'react';

import style from './faq.module.css';

const FAQ = ({title, desc, id}) => {
    const [toggle, setToggle] = useState(false);

    return (
        <section key={id} className={style.container}>
            <div className={style.flex}>
                <h2 className={style.title}>{title}</h2>
                <button onClick={() => setToggle(!toggle)}>
                    {toggle ? 'hide' : '+'}
                </button>
            </div>

            {toggle && <p>{desc}</p>}
        </section>
    );
};

export default FAQ;
