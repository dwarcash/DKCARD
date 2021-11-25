import React from 'react'

export default class Enquiry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //state properties here
        };
    }
    render() {
        return (
            <div class="section-container" id="enquiry-section">
                <h2 class="section-header">Enquiry Form</h2>
                <form class="enquiry-form" novalidate>
                    {/* <!-- Full Name:<br/> --> */}
                    <input type="text" name="enquiryName" id="enquiryName" placeholder="Enter Full Name" /><br />
                    <div class="flex">
                        <div class="enquiry-phoneNumber">
                            {/* <!-- Phone Number:<br/> --> */}
                            <input type="text" name="phoneNumber" id="phoneNumber" placeholder="Enter Phone Number" /><br />
                        </div>
                        <div class="enquiry-email">
                            {/* <!-- Email:<br/> --> */}
                            <input type="text" name="email" id="email" placeholder="Enter Email" /><br />
                        </div>
                    </div>
                    {/* <!-- Message:<br/> --> */}
                    <textarea name="message" id="message" placeholder="Enter Message"></textarea><br />
                    <input type="button" value="Send" onclick="" />
                </form>
                <div class="section-close"></div>
            </div>
        )
    }
}