/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

//import {useState} from 'react';

import {useFormik} from 'formik';
import * as yup from 'yup';

const Form = (props) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },

        validationSchema: yup.object({
            name: yup.string().min(2, 'Name must have 2 characters').required(),

            email: yup.string().email().required(),
            password: yup.string().min(8).required(),
        }),

        onSubmit: (values, {resetForm}) => {
            props.getValue(values);
            resetForm({values: ''});
        },
    });
    const {name, email, password} = formik.values;

    const renderNameErrors = formik.touched.name && (
        <span style={{color: 'red'}}>{formik.errors.name}</span>
    );

    const renderEmailErrors = formik.touched.email && (
        <span style={{color: 'red'}}>{formik.errors.email}</span>
    );

    const renderPasswordErrors = formik.touched.password &&
        formik.errors.password && (
            <span style={{color: 'red'}}>{formik.errors.password}</span>
        );

    return (
        <div>
            <h1>Form</h1>

            <form action="#" onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>

                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={name}
                        onChange={formik.handleChange}
                    />
                    <br />
                    {renderNameErrors}
                </div>
                <div>
                    <label htmlFor="email">Email</label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={email}
                        onChange={formik.handleChange}
                    />
                    <br />
                    {renderEmailErrors}
                </div>
                <div>
                    <label htmlFor="password">Password</label>

                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        value={password}
                        onChange={formik.handleChange}
                    />
                    <br />
                    {renderPasswordErrors}
                </div>

                <div>
                    <button type="submit" id="btn">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );

    // * Normal ways
    /*
    const [value, setValue] = useState({name: '', email: '', password: ''});

    const {name, email, password} = value;

    const handleChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
    };

    const handleValue = (e) => {
        e.preventDefault();
        props.getValue(value);
        setValue({name: '', email: '', password: ''});
    };

    return (
        <div>
            <h1>Form</h1>

            <form action="#" onSubmit={handleValue}>
                <div>
                    <label htmlFor="name">Name</label>

                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>

                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        value={password}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <button type="submit" id="btn">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    ); 
    */
};

export default Form;
