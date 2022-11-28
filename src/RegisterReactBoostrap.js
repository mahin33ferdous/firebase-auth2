import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { getAuth ,createUserWithEmailAndPassword } from 'firebase/auth';
import app from './firebase/firebase.init';

const auth=getAuth(app)
const RegisterReactBoostrap = () => {
    // const handleRegister=event=>{
    //     event.prevenDefault();
    //     console.log(event)
    // //    const email=event.target.email.value;
    // //    const password=event.target.password.value;
    // //    console.log(email,password)
    // }
//const provider =new createUserWithEmailAndPassword()
const [passwordError,setPasswordError]=useState('');
const [success,setSuccess]=useState(false)

    const handleR= (event)=>{
     event.preventDefault()
     setSuccess(false)
     const form=event.target
     const email=form.email.value;
     const password=event.target.password.value;
     console.log(email,password)
     if(!/(?:[^A-Z]*[A-Z])/.test(password))
     {
             setPasswordError("Please provide at least two character");
             return;
     }
     if(password.length<6){
        setPasswordError("password should be at least 6 character")
        return;
     }
     if(!/(?=[^!@#$&*]*[!@#$&*])./.test(password)){
        setPasswordError("please enter at least 1 special character")
        return;
     }
     setPasswordError('');

     createUserWithEmailAndPassword(auth,email,password)
     .then(result=>{
        const user=result.user;
      
       console.log(user)
       setSuccess(true)
       form.reset();
     })
     .catch(error=>{
        console.log('error',error);
        setPasswordError(error.message)
      })
    
    }
    return (
        <div className='w-50 mx-auto'>
            <Form onSubmit={handleR} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
           <p className='text-danger'>{passwordError}</p>
           {success && <p className='text-success'>user created successfully</p>}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    );
};

export default RegisterReactBoostrap;