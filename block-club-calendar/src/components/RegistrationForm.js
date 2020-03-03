import React from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from '../utils/axiosWithAuth';

function RegistrationForm(props) {
    const { register, handleSubmit, watch, errors, reset } = useForm();

    const onSubmit = (data, e) => {
      console.log(data);
      e.target.reset();
      axiosWithAuth().post('/api/users/register', data)
        .then(response => {
          console.log(response);
          props.history.push('/api/events');
        })
        .catch(error => {
          console.log(error);
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Sign Up</h1>
            <label htmlFor="name">Name </label>
            <br />
            <input
                name="name"
                ref={register({ required: true })}
            />
            {errors.name && <span>Name is required!</span>}
            <br />
            <label htmlFor="isBusiness">Are you a business? </label>
            <input
                type="checkbox"
                name="isBusiness"
                ref={register}
            />
            <br />
            <label htmlFor="businessName">Business Name</label>
            <br />
            <input
                name="businessName"
                ref={register}
            />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input
                name="email"
                ref={register({ required: true })}
            />
            {errors.email && <span>Email is required!</span>}
            <br />
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
            <label htmlFor="address">Street Address</label>
            <br />
            <input
                name="address"
                ref={register({ required: true })}
            />
            {errors.address && <span>Address is required!</span>}
            <br />
            <label htmlFor="city">City</label>
            <br />
            <input
                name="city"
                ref={register({ required: true })}
            />
            {errors.city && <span>City is required!</span>}
            <br />
            <label htmlFor="zip">Zip</label>
            <br />
            <input
                name="zip"
                ref={register({ required: true })}
            />
            {errors.zip && <span>Zip is required!</span>}
            <br />
            <input type="submit" />
            <br />
            <span>Already have an Account? </span>
            <Link to="/">Sign In Here</Link>
        </form>
    )
}

export default RegistrationForm;