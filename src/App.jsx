import Header from './Header'
import './App.css'
import React from 'react';
 import { useForm } from 'react-hook-form';
// import { useState } from 'react';

export default function App() {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm();
   
   const nSubmit = (data) =>console.log (data);

   console.log(watch('firstName')); 

   return (
      <>
      <Header/>
      <form onSubmit={handleSubmit(nSubmit)}>
         
         <input {...register('firstName',
         {
          required: "You must enter First Name",
          minLength: {
            value: 8,
            message: "First Name  must have at least 8 characters"
          }})} />
{errors.firstName && <span>{errors.firstName.message}</span>}

         <br/>
          <br/>
        
        
        
         <input {...register('lastName', { required: true, })} />
        {errors.lastName && <span>Last name is required</span>}

        <br/>
        <br/>

        <input {...register('Password',{
      required: "Please enter your password",
      pattern: {
        value:6,
        message: "Password must have 6 characters"
      }
    })}
  />
 {errors.Password && <span>Password required</span>}
          <br/>
          <br/>


         <input {...register('Email',{
      required: "Please enter email ID",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "invalid email address"
      }
    })}
  />
 {errors.Email && <span>{errors.Email.message}</span>}
          <br/>
          <br/>


         <input {...register('Contact', {
        required: "please enter Contact number",
        pattern:{
          value:/^[0-9]{10}$/,
          message: "Contact must have at least 10 numbers"
        }
        })}
        />
        
        {errors.Contact && <span>{errors.Contact.message}</span>}
        
        <br/>
        <br/>
        

         <input type="submit" />
      </form>
      </>
   );
}

