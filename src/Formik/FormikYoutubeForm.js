import React from 'react';
// import { useFormik } from 'formik';
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';

const initialValues = {
    name: '',
    email: '',
    channel: '',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    },
    PhoneNumber: ['', ''],
    phNumbers: [''],
    comment:''
}
const onSubmit = (values) => {
    console.log(values);
}
const validationSchema = Yup.object({
    name: Yup.string().required('Name is required.'),
    email: Yup.string().email('Invalid email format is not allowed.').required('Email is Required.'),
    channel: Yup.string().required('Channel name is required.'),
    address: Yup.string().required('Address name is required.')
})
const validateComment = (value) => {
    let error;
    if(!value){
        error = 'Required';
    }
    return error;
}
const YoutubeForm = () => {
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} validateOnBlur={false} validateOnChange={false}>
            <Form>
                <label htmlFor="name">Name</label><br />
                <Field type="text" name="name" id="name" /><br />
                <ErrorMessage name='name' component='p' />
                <label htmlFor="email">Email</label><br />
                <Field type="email" name="email" id="email" /><br />
                <ErrorMessage name='email'>
                    {
                        (errorMsg) => <div className='error'>{errorMsg}</div>
                    }
                </ErrorMessage>
                <label htmlFor="channel">Channel</label><br />
                <Field type="text" name="channel" id="channel" /><br />
                <ErrorMessage name='channel' component={TextError} />
                <div>
                    <label htmlFor="address">Address</label>
                    <FastField name="address" id="address" >
                        {
                            (props) => {
                                console.log('sd');
                                const { field, form, meta } = props
                                return (
                                    <div>
                                        <input type="text" name="address" id="address" {...field} />
                                        {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                    </div>
                                )
                            }
                        }
                    </FastField>
                </div>
                <div>
                    <label htmlFor="fb">Facebook</label>
                    <Field type="text" id="fb" name="social.facebook" />
                </div>
                <div>
                    <label htmlFor="twt">Twitter</label>
                    <Field type="text" id="twt" name="social.twitter" />
                </div>
                <div>
                    <label htmlFor="PriPhoneNum">Primary Phone number</label>
                    <Field type="text" id="PriPhoneNum" name="PhoneNumber[0]" />
                </div>
                <div>
                    <label htmlFor="SecPhoneNum">Secondary Phone Number</label>
                    <Field type="text" id="SecPhoneNum" name="PhoneNumber[1]" />
                </div>
                <div>
                    <label htmlFor="list_of_phnumbers">List of phone numbers</label>
                    <FieldArray name="phNumbers" id="list_of_phnumbers" >
                        {
                            (fieldArrayProps) => {
                                const { push, remove, form } = fieldArrayProps
                                const { values } = form
                                const { phNumbers } = values
                                console.log(form.errors)
                                return (
                                    <div>
                                        {phNumbers.map((phNumbers, index) => (
                                            <div key={index}>
                                                <Field name={`phNumbers[${index}]`} />
                                                {index > 0 && (
                                                    <button type='button' onClick={() => remove(index)}>
                                                        {' '} - {' '}
                                                    </button>
                                                )}
                                                <button type='button' onClick={() => push('')}> {' '}+ {' '} </button>
                                            </div>
                                        ))}
                                    </div>
                                )
                            }
                        }
                    </FieldArray>
                </div>
                <div> 
                    <label htmlFor="comment">Comment</label>
                    <Field as='textarea' id='comment' name='comment' validate={validateComment} />
                    <ErrorMessage name="comment" component={TextError} />
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default YoutubeForm;