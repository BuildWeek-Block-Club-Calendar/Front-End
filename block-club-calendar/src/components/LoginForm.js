import React from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from '../utils/axiosWithAuth';

function LoginForm(props) {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data, e) => {
      e.target.reset();
      axiosWithAuth().post('/api/users/login', data)
        .then(response => {
          console.log(response);
          window.localStorage.setItem('token', response.data.token);
          props.history.push('/api/events');
        })
        .catch(error => {
          console.log(error);
        });
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Block Club Calendar</h1>
            <label htmlFor="email">Email</label>
            <br />
            <input
                name="email"
                ref={register({ required: true })}
            />
            {errors.username && <span>Username is required!</span>}
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
                name="password"
                type="password"
                ref={register({ required: true })}
            />
            {errors.password && <span>Password is required!</span>}
            <br />
            <input type="submit" />
            <br />
            <span>New to Block Club Calendar? </span>
            <Link to="/api/users/register">Sign Up Here</Link>
            <br />
            <Link to="/api/events">Continue as guest</Link>
        </form>
    )
}


export default LoginForm;