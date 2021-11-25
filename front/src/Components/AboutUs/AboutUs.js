import React from 'react'

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //state properties here
        };
    }
    render() {
        return (
            <div class="section-container" id="about-us-section">
                <h2 class="section-header">About Us</h2>
                <table class="about-us-table">
                    <tbody>
                        {this.props.data.companyName && <tr>
                            <td class="table-row-label">
                                <h3 class="table-row-label-text">Company Name</h3><b class="table-row-label-separator">:</b>
                            </td>
                            <td class="table-row-value">
                                {this.props.data.companyName}
                            </td>
                        </tr>}

                        {this.props.data.year && <tr>
                            <td class="table-row-label">
                                <h3 class="table-row-label-text">Year of Est.</h3><b class="table-row-label-separator">:</b>
                            </td>
                            <td class="table-row-value">
                                {this.props.data.year}
                            </td>
                        </tr>}

                        {this.props.data.nature && <tr>
                            <td class="table-row-label">
                                <h3 class="table-row-label-text">Nature Of Business</h3><b class="table-row-label-separator">:</b>
                            </td>
                            <td class="table-row-value">
                                {this.props.data.nature}
                            </td>
                        </tr>}
                    </tbody>


                </table>

                {(this.props.data.speciality1 || this.props.data.speciality2 || this.props.data.speciality3) &&
                    <><h3 class="speciality-label">Our Specialities</h3><div class="about-us-text">
                        {this.props.data.speciality1}
                    </div><div class="about-us-text">
                            {this.props.data.speciality2}
                        </div><div class="about-us-text">
                            {this.props.data.speciality3}
                        </div></>}


                <div class="section-close"></div>
            </div>
        )
    }
}

