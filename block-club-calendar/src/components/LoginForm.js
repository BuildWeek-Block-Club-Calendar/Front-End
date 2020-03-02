import React from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function LoginForm() {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = (data, e) => {
        console.log(data);
        e.target.reset();
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Block Club Calendar</h1>
            <label htmlFor="username">Username</label>
            <br />
            <input
                name="username"
                ref={register({ required: true })}
            />
            {errors.username && <span>Username is required!</span>}
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
                name="password"
                ref={register({ required: true })}
            />
            {errors.password && <span>Password is required!</span>}
            <br />
            <input type="submit" />
            <br />
            <span>New to Block Club Calendar? </span>
            <Link to="/sign-up">Sign Up Here</Link>
            <br />
            <Link to="/api/events">Continue as guest</Link>
        </form>
    )
}


export default LoginForm;