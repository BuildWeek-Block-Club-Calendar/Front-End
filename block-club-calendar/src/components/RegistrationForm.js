import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`

const Form = styled.form`
width:70%;
font-size:3rem;
margin:20px auto;
`

const Input = styled.input`
height:25px;
width:290px;
border-radius:5px;
border:none;
margin:20px auto;
`

function RegistrationForm(props) {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data, e) => {
      e.target.reset();
      axiosWithAuth().post('/api/users/register', data)
        .then(response => {
          window.localStorage.setItem('token', response.data.token);
          window.localStorage.setItem('user_id', response.data._id);
          window.localStorage.setItem('user_city', response.data.user.city);
          props.history.push('/api/events');
        })
        .catch(error => {
          console.log(error);
        });
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h1>Sign Up</h1>
                <label htmlFor="name">Name </label>
                <br />
                <Input
                    name="name"
                    ref={register({ required: true })}
                />
                {errors.name && <span>Name is required!</span>}
                <br />
                <label htmlFor="isBusiness">Are you a business? </label>
                <Input
                    type="checkbox"
                    name="isBusiness"
                    ref={register}
                />
                <br />
                <label htmlFor="businessName">Business Name</label>
                <br />
                <Input
                    name="businessName"
                    ref={register}
                />
                <br />
                <label htmlFor="email">Email</label>
                <br />
                <Input
                    name="email"
                    ref={register({ required: true })}
                />
                {errors.email && <span>Email is required!</span>}
                <br />
                <label htmlFor="username">Username</label>
                <br />
                <Input
                    name="username"
                    ref={register}
                />
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <Input
                    name="password"
                    type="password"
                    ref={register({ required: true })}
                />
                {errors.password && <span>Password is required!</span>}
                <br />
                <label htmlFor="address">Street Address</label>
                <br />
                <Input
                    name="address"
                    ref={register}
                />
                <br />
                <label htmlFor="city">City</label>
                <br />
                <Input
                    name="city"
                    ref={register({ required: true })}
                />
                {errors.city && <span>City is required!</span>}
                <br />
                <label htmlFor="zip">Zip</label>
                <br />
                <Input
                    name="zip"
                    ref={register({ required: true })}
                />
                {errors.zip && <span>Zip is required!</span>}
                <br />
                <button>Sign Up</button>
                <br />
                <span>Already have an Account? </span>
                <Link to="/">Sign In Here</Link>
            </Form>
        </Container>
    )
}

export default RegistrationForm;