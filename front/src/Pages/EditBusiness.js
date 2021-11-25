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

const EditBusiness = ({ data, setData, setIsEdit }) => {

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler, setFormData] = useForm(
    {
      companyName: {
        value: data.companyName,
        valid: true,
      },
      founder1: {
        value: data.founder1,
        valid: true,
      },
      founder2: {
        value: data.founder2,
        valid: true,
      },
      founder3: {
        value: data.founder3,
        valid: true,
      },
      address: {
        value: data.address,
        valid: true,
      },
      addressLink: {
        value: data.addressLink,
        valid: true,
      },
      email: {
        value: data.email,
        valid: true,
      },
      website: {
        value: data.website,
        valid: true,
      },
      mobile: {
        value: data.mobile,
        valid: true,
      },
      facebook: {
        value: data.facebook,
        valid: true,
      },
      insta: {
        value: data.insta,
        valid: true,
      },
      twitter: {
        value: data.twitter,
        valid: true,
      },
      linkedin: {
        value: data.linkedin,
        valid: true,
      },
      year: {
        value: data.year,
        valid: true,
      },
      nature: {
        value: data.nature,
        valid: true,
      },
      speciality1: {
        value: data.speciality1,
        valid: true,
      },
      speciality2: {
        value: data.speciality2,
        valid: true,
      },
      speciality3: {
        value: data.speciality3,
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
        founder1: formState.inputs.founder1.value,
        founder2: formState.inputs.founder2.value,
        founder3: formState.inputs.founder3.value,
        address: formState.inputs.address.value,
        addressLink: formState.inputs.addressLink.value,
        email: formState.inputs.email.value,
        website: formState.inputs.website.value,
        mobile: formState.inputs.mobile.value,
        facebook: formState.inputs.facebook.value,
        insta: formState.inputs.insta.value,
        twitter: formState.inputs.twitter.value,
        linkedin: formState.inputs.linkedin.value,
        year: formState.inputs.year.value,
        nature: formState.inputs.nature.value,
        speciality1: formState.inputs.speciality1.value,
        speciality2: formState.inputs.speciality2.value,
        speciality3: formState.inputs.speciality3.value,
      }
      
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + '/editBusiness',
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

    setIsEdit(false)
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Card className="authentication">
        {isLoading && <LoadingSpinner asOverlay />}
        <h2>Edit business details</h2>
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
            initialValid={true}
            initialValue={data.companyName}
          />

          <Input
            id="founder1"
            element="input"
            type="text"
            label="Founder 1"
            validators={[]}
            initialValue={data.founder1}
            onInput={inputHandler}
            initialValid={true}
          />

          <Input
            id="founder2"
            element="input"
            type="text"
            label="Founder 2"
            validators={[]}
            initialValue={data.founder2}
            onInput={inputHandler}
            initialValid={true}
          />

          <Input
            id="founder3"
            element="input"
            type="text"
            label="Founder 3"
            validators={[]}
            initialValue={data.founder3}
            onInput={inputHandler}
            initialValid={true}
          />

          <Input
            id="address"
            element="input"
            type="text"
            label="Address"
            validators={[]}
            initialValue={data.address}
            onInput={inputHandler}
            initialValid={true}
          />
          <Input
            id="addressLink"
            element="input"
            type="text"
            label="Address maps link"
            validators={[]}
            initialValue={data.addressLink}
            onInput={inputHandler}
            initialValid={true}
          />
          <Input
            id="email"
            element="input"
            type="text"
            label="E-mail"
            validators={[]}
            initialValue={data.email}
            onInput={inputHandler}
            initialValid={true}
          />
          <Input
            id="website"
            element="input"
            type="text"
            label="website"
            validators={[]}
            initialValue={data.website}
            onInput={inputHandler}
            initialValid={true}
          />
          <Input
            id="mobile"
            element="input"
            type="number"
            label="Mobile number"
            validators={[]}
            initialValue={data.mobile}
            onInput={inputHandler}
            initialValid={true}
          />

          <Input
            id="facebook"
            element="input"
            type="text"
            label="facebook"
            validators={[]}
            initialValue={data.facebook}
            onInput={inputHandler}
            initialValid={true}
          />
          <Input
            id="insta"
            element="input"
            type="text"
            label="insta"
            validators={[]}
            initialValue={data.insta}
            onInput={inputHandler}
            initialValid={true}
          />
          <Input
            id="twitter"
            element="input"
            type="text"
            label="twitter"
            validators={[]}
            initialValue={data.twitter}
            onInput={inputHandler}
            initialValid={true}
          />
          <Input
            id="linkedin"
            element="input"
            type="text"
            label="linkedin"
            validators={[]}
            initialValue={data.linkedin}
            onInput={inputHandler}
            initialValid={true}
          />
          <Input
            id="year"
            element="input"
            type="number"
            label="Year of establishment"
            validators={[[]]}
            initialValue={data.year}
            onInput={inputHandler}
            initialValid={true}
          />
          <Input
            id="nature"
            element="input"
            type="text"
            label="Nature of business"
            validators={[]}
            initialValue={data.nature}
            onInput={inputHandler}
            initialValid={true}
          />
          <Input
            id="speciality1"
            type="text"
            label="Speciality1"
            validators={[]}
            initialValue={data.speciality1}
            onInput={inputHandler}
            initialValid={true}
          />
          <Input
            id="speciality2"
            type="text"
            label="Speciality2"
            validators={[]}
            initialValue={data.speciality2}
            onInput={inputHandler}
            initialValid={true}
          />
          <Input
            id="speciality3"
            type="text"
            label="Speciality3"
            validators={[]}
            initialValue={data.speciality3}
            onInput={inputHandler}
            initialValid={true}
          />

          <Button type="submit" disabled={!formState.isValid}>
            Edit Business
          </Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default EditBusiness;
