import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';


const UserForm = ({ errors, touched, values, handleSubmit, status }) => {
    const [users, setUsers] = useState([]);
    console.log({users: users});
  
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
                        <Field type="text" name="username" placeholder="Name" />
                        {touched.username && errors.username && (
                            <p className="error">{errors.username}</p>
                        )}
                
                        <Field type="text" name="password" placeholder="Password" />
                        {touched.password && errors.password && <p className="error">{errors.password}</p>}
            
                        <button type="submit">Submit!</button>
                        </Form>
                    </div>

            <div className='user-list'>
                {users.map(user => (
                        <div className = "ui raised cards" key={user.username}>
                            <div className="card">
                                <div className="content">
                                    <div className="header">{user.username}</div>
                                </div>
                            </div>
                        </div>
                ))}
            </div>
        </div>
    );
  };
  
  const FormikUserForm = withFormik({
    mapPropsToValues({ username, password }) {
      return {
        username: username || '',
        password: password || '',
      };
    },
  
    validationSchema: Yup.object().shape({
      username: Yup.string().required('We need to know your name!'),
      password: Yup.string().required('You\'re gonna want a password!'),
    }),
  
    handleSubmit(values, { setStatus }) {
      axios
        .post('http://localhost:5000/api/register', values)
        .then(res => {
          setStatus(values);
        })
        .catch(err => console.log(err.response));
    }
  })(UserForm);
  
  export default FormikUserForm;