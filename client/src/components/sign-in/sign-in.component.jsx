import React, { useState } from 'react';
import './sign-in.scss';
import { FormInput } from '../form-input/form-input.component';
import CustomButton from '../custom-button';
import { googleSignInStart, emailSignInStart } from '../../redux/user';
import { connect } from 'react-redux';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label='email'
          type='email'
          name='email'
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          label='password'
          type='password'
          name='password'
          value={password}
          handleChange={handleChange}
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn='true'>
            Sign in with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  googleSignInStart,
  emailSignInStart,
};

export default connect(null, mapDispatchToProps)(SignIn);
