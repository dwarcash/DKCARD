import React, { useState } from 'react'
import { useHttpClient } from '../../shared/hooks/http-hook';

const Enquiry = ({ data, setData }) => {

    const [enquiry, setEnquiry] = useState()

    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const uploadHandler = async () => {

        const responseData = await sendRequest(
            process.env.REACT_APP_BACKEND_URL + '/addEnquiry',
            'POST',
            JSON.stringify({
                loginEmail: data.loginEmail,
                enquiry
                
            }),
            {
                'Content-Type': 'application/json',
            }
        );

        const enquiries = [...data.enquiries]
        enquiries.push(enquiry)

        setData(oldData => {

            const finalData = {
                ...oldData,
                enquiries
            }

            localStorage.setItem('data', JSON.stringify(finalData))

            console.log(finalData)
            return finalData
        })

        alert('Your enquiry is submitted successfully!')

    }
    

    return (
        <div class="section-container" id="enquiry-section">
            <h2 class="section-header">Enquiry Form</h2>
            <form class="enquiry-form" novalidate>
                {/* <!-- Full Name:<br/> --> */}
                <input type="text" name="enquiryName" id="enquiryName" placeholder="Enter Full Name" onChange={(e) => setEnquiry(prevState => { return { ...prevState, name: e.target.value } })}/>
                
                <br />
                <div class="flex">
                    <div class="enquiry-phoneNumber">
                        {/* <!-- Phone Number:<br/> --> */}
                        <input type="text" name="phoneNumber" id="phoneNumber" placeholder="Enter Phone Number" onChange={(e) => setEnquiry(prevState => { return { ...prevState, mobile: e.target.value } })}/>
                        <br />
                    </div>
                    <div class="enquiry-email">
                        {/* <!-- Email:<br/> --> */}
                        <input type="text" name="email" id="email" placeholder="Enter Email" 
                        onChange={(e) => setEnquiry(prevState => { return { ...prevState, email: e.target.value } })}/><br />
                    </div>
                </div>
                {/* <!-- Message:<br/> --> */}
                <textarea name="message" id="message" placeholder="Enter Message" onChange={(e) => setEnquiry(prevState => { return { ...prevState, enquiry: e.target.value } })}></textarea><br />
                <input type="button" value="Send" onClick={uploadHandler} />
            </form>
            <div class="section-close"></div>
        </div>
    )
}

export default Enquiry