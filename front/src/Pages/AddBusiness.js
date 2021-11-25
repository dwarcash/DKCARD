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
import { storage } from '../firebase';

const AddBusiness = ({ setData }) => {

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler, setFormData] = useForm(
    {
      companyName: {
        value: '',
        valid: true,
      },
      founder1: {
        value: '',
        valid: true,
      },
      founder2: {
        value: '',
        valid: true,
      },
      founder3: {
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
      facebook: {
        value: '',
        valid: true,
      },
      insta: {
        value: '',
        valid: true,
      },
      twitter: {
        value: '',
        valid: true,
      },
      linkedin: {
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
      speciality1: {
        value: '',
        valid: true,
      },
      speciality2: {
        value: '',
        valid: true,
      },
      speciality3: {
        value: '',
        valid: true,
      },
    },
    true
  );

  const [logo, setLogo] = useState()


  const submitHandler = async (event) => {
    event.preventDefault();

    try {

      const localData = JSON.parse(localStorage.getItem('data'))

      let downloadURL
      const uploadTask = storage.ref(`images/${logo.name}`).put(logo);
      uploadTask.on(
        "state_changed",
        snapshot => { },
        error => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(logo.name)
            .getDownloadURL()
            .then(async url => {


              downloadURL = url

              const data = {
                loginEmail: localData.loginEmail,
                companyName: formState.inputs.companyName.value,
                companyLogoUrl: downloadURL,
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
                products: [],
                gallery: [],
                feedbacks: [],
                enquiries: []
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

            });
        }
      );




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
            initialValid={true}
          />
          <Input
            id="companyLogoUrl"
            element="input"
            type="text"
            label="Company Logo Image URL"
            validators={[]}

            onInput={inputHandler}
            initialValid={true}
          />

          <Input
            id="founder1"
            element="input"
            type="text"
            label="Founder 1"
            validators={[]}

            onInput={inputHandler}
            initialValid={true}
          />

          <Input
            id="founder2"
            element="input"
            type="text"
            label="Founder 2"
            validators={[]}

            onInput={inputHandler}
            initialValid={true}
          />

          <Input
            id="founder3"
            element="input"
            type="text"
            label="Founder 3"
            validators={[]}

            onInput={inputHandler}
            initialValid={true}
          />

          <Input
            id="address"
            element="input"
            type="text"
            label="Address"
            validators={[]}

            onInput={inputHandler}
            initialValid={true}
          />
          <Input
            id="addressLink"
            element="input"
            type="text"
            label="Address maps link"
            validators={[]}

            onInput={inputHandler}
            initialValid={true}
          />
          <Input
            id="email"
            element="input"
            type="text"
            label="E-mail"
            validators={[]}

            onInput={inputHandler}
            initialValid={true}
          />
          <Input
            id="website"
            element="input"
            type="text"
            label="website"
            validators={[]}

            onInput={inputHandler}
            initialValid={true}
          />
          <Input
            id="mobile"
            element="input"
            type="number"
            label="Mobile number"
            validators={[]}

            onInput={inputHandler}
            initialValid={true}
          />

          <Input
            id="facebook"
            element="input"
            type="text"
            label="facebook"
            validators={[]}

            onInput={inputHandler}
            initialValid={true}
          />
          <Input
            id="insta"
            element="input"
            type="text"
            label="insta"
            validators={[]}

            onInput={inputHandler}
            initialValid={true}
          />
          <Input
            id="twitter"
            element="input"
            type="text"
            label="twitter"
            validators={[]}

            onInput={inputHandler}
            initialValid={true}
          />
          <Input
            id="linkedin"
            element="input"
            type="text"
            label="linkedin"
            validators={[]}

            onInput={inputHandler}
            initialValid={true}
          />
          <Input
            id="year"
            element="input"
            type="number"
            label="Year of establishment"
            validators={[[]]}

            onInput={inputHandler}
            initialValid={true}
          />
          <Input
            id="nature"
            element="input"
            type="text"
            label="Nature of business"
            validators={[]}

            onInput={inputHandler}
            initialValid={true}
          />
          <Input
            id="speciality1"
            type="text"
            label="Speciality1"
            validators={[]}

            onInput={inputHandler}
            initialValid={true}
          />
          <Input
            id="speciality2"
            type="text"
            label="Speciality2"
            validators={[]}

            onInput={inputHandler}
            initialValid={true}
          />
          <Input
            id="speciality3"
            type="text"
            label="Speciality3"
            validators={[]}

            onInput={inputHandler}
            initialValid={true}
          />
          SELECT LOGO
          <input type="file" onChange={(e) => setLogo(e.target.files[0])} />
          <Button type="submit" disabled={!formState.isValid}>
            Add Business
          </Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddBusiness;
