import React, {useState} from 'react';
import {faqsData} from './data';

import FAQ from './FAQ';

const FAQS = () => {
    const [faqs, setFaqs] = useState(faqsData);

    //const {title,desc,id} = Toggles

    return (
        <div>
            <h1>FAQS</h1>

            {faqs.map((faq) => (
                <FAQ key={faq.id} {...faq} />
            ))}
        </div>
    );
};

export default FAQS;
