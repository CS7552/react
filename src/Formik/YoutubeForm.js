import React from 'react';
import { useFormik } from 'formik';

const initialValues = {
    email:'',
    name:'',
    channel:''
}
const onSubmit = values => {
    console.log(values);
}
const validate = values => {
    let errors = {};
    if(!values.name){
        errors.name = "This field is required.";
    }
    if(!values.email){
        errors.email = "This field is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = 'Email is invalid.'
    }
    if(!values.channel){
        errors.channel = "This field is required.";
    }
    return errors;
}
const YoutubeForm = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });
    console.log(formik.errors);

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label><br/>
                <input type="text" name="name" id="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} /><br/>
                {/* {...formik.getFieldProps('name')} */}
                {formik.errors.name && formik.touched.name ? <div>{formik.errors.name}</div>:null}
                <label htmlFor="email">Email</label><br/>
                <input type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email}  onBlur={formik.handleBlur} /><br/>
                {/* {...formik.getFieldProps('email')} */}
                {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div>:null}
                <label htmlFor="channel">Channel</label><br/>
                <input type="text" name="channel" id="channel" onChange={formik.handleChange} value={formik.values.channel}  onBlur={formik.handleBlur} /><br/>
                {/* {...formik.getFieldProps('channel')} */}
                {formik.errors.channel && formik.touched.channel ? <div>{formik.errors.channel}</div>:null}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default YoutubeForm;