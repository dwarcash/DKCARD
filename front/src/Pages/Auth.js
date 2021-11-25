import React, { useState } from 'react';

import Input from '../shared/components/FormElements/Input';
import Button from '../shared/components/FormElements/Button';
import Card from '../shared/components/UIElements/Card';
import LoadingSpinner from '../shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../shared/components/UIElements/ErrorModal';
import './Auth.css';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../shared/util/validators';
import { useForm } from '../shared/hooks/form-hook';
import { useHttpClient } from '../shared/hooks/http-hook';

const Auth = ({setData}) => {

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        valid: false,
      },
      password: {
        value: '',
        valid: false,
      },
    },
    false
  );

  const [isLoginMode, setIsLoginMode] = useState(true);

  const switchModeHandler = () => {

    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } 


    setIsLoginMode(prevMode => !prevMode);
  };


  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(process.env)

    let url = process.env.REACT_APP_BACKEND_URL
    if (isLoginMode) {
      url = url + '/login'
    } else {
      url = url + '/signup'
    }
    try {
      const responseData = await sendRequest(
        url,
        'POST',
        JSON.stringify({
          loginEmail: formState.inputs.email.value,
          password: formState.inputs.password.value,
        }),
        {
          'Content-Type': 'application/json',
        }
      );
      
      console.log(responseData)
      setData(responseData)
      
      localStorage.setItem('data', JSON.stringify(responseData))

    } catch (err) { console.log(err) }


  };

  return (
    <React.Fragment>
      {/* <ErrorModal error={error} onClear={clearError} /> */}
      <Card className="authentication">
        {isLoading && <LoadingSpinner asOverlay />}
        <h2>{`Authentication Required`}</h2>
        <hr />
        <form onSubmit={submitHandler}>
          <Input
            id="email"
            element="input"
            type="email"
            label="E-mail"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid e-mail address."
            onInput={inputHandler}
          />
          <Input
            id="password"
            element="input"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="Please enter a valid password, at least 6 characters."
            onInput={inputHandler}
          />
          {error && <div>
            {error}
            </div>}
          <Button type="submit" disabled={!formState.isValid}>
            {isLoginMode ? 'LOGIN' : 'SIGNUP'}
          </Button>
        </form>
        <Button onClick={switchModeHandler} inverse>
          SWITCH TO {isLoginMode ? 'SIGN UP' : 'LOGIN'}
        </Button>
      </Card>
    </React.Fragment>
  );
};

export default Auth;
