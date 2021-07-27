import React from 'react'
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";

import './login.css';

const USER_NAME = 'test';

export const Login = () => {
  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => {
    if (data.username === USER_NAME) {
      history.push('/home')
    }
  };
  return (
    <main>
      <h1>Login</h1>
      <div className="login-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">User Name</label>
          <input {...register("username", { required: true })} id="username" />
          {errors.username && <span className="error-msg">This field is required</span>}
          <label htmlFor="password">Password</label>
          <input {...register("password")} id="password" type="password" />
          <button type="submit"> Login </button>
        </form>
      </div>
    </main>
  )
}
