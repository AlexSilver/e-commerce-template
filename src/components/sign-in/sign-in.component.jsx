import React, { Component } from 'react';
import './sign-in.scss';
import { FormInput } from '../form-input/form-input.component';
import CustomButton from '../custom-button';
import { googleSignInStart, emailSignInStart } from '../../redux/user';
import { connect } from 'react-redux';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);

  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { email, password } = this.state;
    const { googleSignInStart } = this.props;
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label='email'
            type='email'
            name='email'
            value={email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label='password'
            type='password'
            name='password'
            value={password}
            handleChange={this.handleChange}
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn='true'>
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  googleSignInStart,
  emailSignInStart
}

export default connect(null, mapDispatchToProps)(SignIn);
