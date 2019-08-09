import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const UserForm = ({ errors, touched, values, status }) => {
    const [users, setUsers] = useState([]);
    console.log(users);
  
    useEffect(() => {
        if (status) {
            setUsers([...users, status]);
          }
        }, [status]);
  
    return (
        <div className = 'container'>
            <div className="user-form">
                        <h1>Create an Account</h1>
                        <Form>
                        <Field type="text" name="username" placeholder="Username" />
                        {touched.username && errors.username && (
                            <p className="error">{errors.username}</p>
                        )}

                        <Field type="text" name="password" placeholder="Password" />
                        {touched.password && errors.password && <p className="error">{errors.password}</p>}
                
                        <label className="checkbox-container">
                            Terms of Service
                            <Field
                            type="checkbox"
                            name="terms"
                            checked={values.terms}
                            />
                            <span className="checkmark" />
                        </label>
                        {touched.terms && errors.terms && <p className="error">{errors.terms}</p>}

                        <button type="submit">Submit!</button>
                        </Form>
            </div>
        </div>
    );
  };
  
  const FormikUserForm = withFormik({
    mapPropsToValues({ username, password, terms }) {
      return {
        terms: terms || false,
        username: username || '',
        password: password || '',
      };
    },
  
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Please enter a username!'),
      email: Yup.string().required('Please enter a password!'),
      terms: Yup.bool().oneOf([true],'You must agree to our terms!'),
    }),


    handleSubmit({setStatus}) {
        axios
            .post('http://localhost:5000/api/register', {username: "Your name",password: "password"})
            .then(res => 
                {setStatus(res.data);
            })
            .catch(err => console.log(err.response));
    }

  })(UserForm);
  
  export default FormikUserForm;