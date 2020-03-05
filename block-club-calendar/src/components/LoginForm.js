import React from 'react'
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

function LoginForm(props) {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data, e) => {
      e.target.reset();
      axiosWithAuth().post('/api/users/login', data)
        .then(response => {
          console.log(response);
          props.history.push('/api/events');
          window.localStorage.setItem('token', response.data.token);
          window.localStorage.setItem('user_id', response.data.user._id);
        })
        .catch(error => {
          console.log(error);
        });
    };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Block Club Calendar</h1>
        <label htmlFor="email">Email</label>
        <br />
        <Input
          name="email"
          ref={register({ required: true })}
        />
        <br />
        {errors.email && <span>Email is required!</span>}
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <Input
          name="password"
          type="password"
          ref={register({ required: true })}
        />
        <br />
        {errors.password && <span>Password is required!</span>}
        <br />
        <button>Sign In</button>
        <br />
        <span>New to Block Club Calendar? </span>
        <br />
        <Link to="/api/users/register">Sign Up Here</Link>
        <br />
        <Link to="/events">Continue as guest</Link>
      </Form>
    </Container>
  )
}


export default LoginForm;