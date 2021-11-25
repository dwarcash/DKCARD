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
  VALIDATOR_NUMBER
} from '../shared/util/validators';
import { useForm } from '../shared/hooks/form-hook';
import { useHttpClient } from '../shared/hooks/http-hook';

const AddBusiness = ({ setData }) => {

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler, setFormData] = useForm(
    {
      companyName: {
        value: '',
        valid: true,
      },
      companyLogoUrl: {
        value: '',
        valid: true,
      },
      founders: {
        value: '',
        valid: true,
      },
      address: {
        value: '',
        valid: true,
      },
      addressLink: {
        value: '',
        valid: true,
      },
      email: {
        value: '',
        valid: true,
      },
      website: {
        value: '',
        valid: true,
      },
      mobile: {
        value: '',
        valid: true,
      },
      year: {
        value: '',
        valid: true,
      },
      nature: {
        value: '',
        valid: true,
      },
      specialities: {
        value: '',
        valid: true,
      },
    },
    true
  );




  const submitHandler = async (event) => {
    event.preventDefault();

    try {

      const localData = JSON.parse(localStorage.getItem('data'))

      const data = {
        loginEmail: localData.loginEmail,
        companyName: formState.inputs.companyName.value,
        companyLogoUrl: formState.inputs.companyLogoUrl.value,
        founders: formState.inputs.founders.value,
        address: formState.inputs.address.value,
        addressLink: formState.inputs.addressLink.value,
        email: formState.inputs.email.value,
        website: formState.inputs.website.value,
        mobile: formState.inputs.mobile.value,
        year: formState.inputs.year.value,
        nature: formState.inputs.nature.value,
        specialities: formState.inputs.specialities.value,
      }
      
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + '/addBusiness',
        'POST',
        JSON.stringify(data),
        {
          'Content-Type': 'application/json',
        }
      );


      setData(oldData => {

        const finalData = {
          ...oldData,
          ...data
        }
        
        localStorage.setItem('data', JSON.stringify(finalData))

        return finalData
      })

    } catch (err) { console.log(err) }


  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Card className="authentication">
        {isLoading && <LoadingSpinner asOverlay />}
        <h2>Add your business details</h2>
        <hr />
        <form onSubmit={submitHandler}>
          <Input
            id="companyName"
            element="input"
            type="text"
            label="Company Name"
            validators={[]}
            errorText="Please enter your company name."
            onInput={inputHandler}
          />
         <Input
            id="companyLogoUrl"
            element="input"
            type="text"
            label="Company Logo Image URL"
            validators={[]}
            
            onInput={inputHandler}
          />
          
           <Input
            id="founders"
            element="input"
            type="text"
            label="Founder Name"
            validators={[]}
            
            onInput={inputHandler}
          />
          <Input
            id="address"
            element="input"
            type="text"
            label="Address"
            validators={[]}
            
            onInput={inputHandler}
          />
          <Input
            id="addressLink"
            element="input"
            type="text"
            label="Address maps link"
            validators={[]}
            
            onInput={inputHandler}
          />
          <Input
            id="email"
            element="input"
            type="text"
            label="E-mail"
            validators={[]}
            
            onInput={inputHandler}
          />
          <Input
            id="website"
            element="input"
            type="text"
            label="website"
            validators={[]}
            
            onInput={inputHandler}
          />
          <Input
            id="mobile"
            element="input"
            type="number"
            label="Mobile number"
            validators={[]}
            
            onInput={inputHandler}
          />
          <Input
            id="year"
            element="input"
            type="number"
            label="Year of establishment"
            validators={[[]]}
            
            onInput={inputHandler}
          />
          <Input
            id="nature"
            element="input"
            type="text"
            label="Nature of business"
            validators={[]}
            
            onInput={inputHandler}
          />
          <Input
            id="specialities"
            type="text"
            label="Specialities"
            validators={[]}
            
            onInput={inputHandler}
          />

          <Button type="submit" disabled={!formState.isValid}>
            Add Business
          </Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddBusiness;
