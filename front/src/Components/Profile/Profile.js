import React, {useState} from 'react'
import { storage } from '../../firebase';
import { useHttpClient } from '../../shared/hooks/http-hook';


const Profile = ({ data, setData }) => {


    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const addProductHandler = (profileImage) => {
        const uploadTask = storage.ref(`images/${profileImage.name}`).put(profileImage);
        uploadTask.on(
            "state_changed",
            snapshot => { },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(profileImage.name)
                    .getDownloadURL()
                    .then(async url => {


                        const responseData = await sendRequest(
                            process.env.REACT_APP_BACKEND_URL + '/addLogo',
                            'POST',
                            JSON.stringify({
                                loginEmail: data.loginEmail,
                                url
                            }),
                            {
                                'Content-Type': 'application/json',
                            }
                        );


                        setData(oldData => {

                            const finalData = {
                                ...oldData,
                                companyLogoUrl: url
                            }

                            localStorage.setItem('data', JSON.stringify(finalData))

                            console.log(finalData)
                            return finalData
                        })

                    });
            }
        );



    }

    return (
        <div class="page-wrapper" id="home-section">
            <div class="upper">
                <div class="views-label"><i class="fas fa-eye"></i> Views: <b>10757</b></div>
                {/* <!-- User Profile Pic --> */}
                <input type="file" onChange={(e) => addProductHandler(e.target.files[0])} />
                <img src={data.companyLogoUrl} class="profile-pic-img" />

                {/* <!-- User Company Name --> */}
                <div class="firmname">{data.companyName}</div>



                {/* <!-- User First Name and Last Name --> */}
                <div className="name">{data.founder1}<span style={{ marginTop: '5px', display: 'inline' }}><i style={{ fontSize: '12px' }}></i></span></div>
                <div className="name">{data.founder2}<span style={{ marginTop: '5px', display: 'inline' }}><i style={{ fontSize: '12px' }}></i></span></div>
                <div className="name">{data.founder3}<span style={{ marginTop: '5px', display: 'inline' }}><i style={{ fontSize: '12px' }}></i></span></div>
                <div class="contact-buttons">
                    <a class="contact-button" href={`tel:${data.mobile}`}>
                        <i class="fas fa-phone fa-flip-horizontal"></i>
                        Call
                    </a>
                    <a class="contact-button" target="_blank" href={`https://wa.me/${data.mobile}?text=Got reference from your Digital vCard. Want to know more details.`}>
                        <i class="fab fa-whatsapp"></i>
                        Whatsapp
                    </a>
                    <a class="contact-button" target="_blank" href={data.addressLink}>
                        <i class="fas fa-map-marker-alt fa-flip-horizontal"></i>
                        Direction
                    </a>
                    <a class="contact-button" target="_blank" href={`mailto:${data.addressLink}`}>
                        <i class="fas fa-envelope fa-flip-horizontal"></i>
                        Mail
                    </a>
                </div>
            </div>
            <svg viewBox="0 0 400 25" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
                <defs>
                    <pattern id="Wave"
                        x="0" y="0" width="100" height="25"
                        patternUnits="userSpaceOnUse" >
                        <path d="M0 25 0 6C20 9 38 11 55 7 72 4 87 4 100 6l0 19z" id="path4" fill="#F17D3A" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#Wave)" />
            </svg>

            <div class="lower">
                <table class="contact-action-table">
                    <tbody>

                        <tr>
                            <td>
                                <a target="_blank" href={data.addressLink}>
                                    <i class="fas fa-map-marker-alt contact-action-container-icon"></i>
                                </a>
                            </td>
                            <td>
                                <a target="_blank" href={data.addressLink} class="contact-action-container-text">
                                    {data.address}
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <a href={`mailto:${data.email}`}>
                                    <i class="fas fa-envelope contact-action-container-icon"></i>
                                </a>
                            </td>
                            <td>

                                <a href={`mailto:${data.email}`} class="contact-action-container-text">
                                    {data.email}
                                </a><br />

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a target="_blank" href={data.website}>
                                    <i class="fas fa-globe contact-action-container-icon"></i>
                                </a>
                            </td>
                            <td>
                                <a target="_blank" href={data.website} class="contact-action-container-text">
                                    {data.website}
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a target="_blank" href={`tel:${data.mobile}`}>
                                    <i class="fas fa-phone fa-flip-horizontal contact-action-container-icon"></i>
                                </a>
                            </td>
                            <td>
                                <a target="_blank" href={`tel:${data.mobile}`} class="contact-action-container-text" >
                                    +91{data.mobile}
                                </a>

                            </td>
                        </tr>

                    </tbody>
                </table>

                <div class="p-30"></div>

                <div class="whatsapp-input">
                    <div class="input-wrapper">
                        <input type="tel" id="whatsapp-input" class="input" placeholder="Enter whatsapp number" oninput="this.value=this.value.replace(/[^0-9]/g,'');" />
                    </div>
                    <a class="whatsapp-button"
                        target="_blank"
                        href="javascript:;"
                        onclick="">
                        <i class="fab fa-whatsapp"></i>Share on Whatsapp
                    </a>
                </div>

                <div class="p-20"></div>

                <div class="shadow-buttons">
                    <a class="shadow-button" href="https://vcard-bucket.s3.us-east-2.amazonaws.com/A001/1/1.vcf" download><i class="fas fa-download shadow-button-icon"></i>Add to Phone Book</a>
                    <a class="shadow-button" onclick=""><i class="fas fa-share-alt shadow-button-icon"></i>Share</a>
                </div>
                <div><a class="shadow-button save-card-button"><i class="fas fa-cloud-download-alt shadow-button-icon"></i>Save Card</a></div>

                <div class="p-30"></div>

                <ul class="inprofile share-buttons">
                    <li class="share-button">
                        <a target="_blank" href={`${data.facebook}`}><i class="share-button-facebook fab fa-facebook-f"></i></a>
                    </li>
                    <li class="share-button">
                        <a target="_blank" href={`${data.twitter}`}><i class="share-button-twitter fab fa-twitter"></i></a>
                    </li>
                    <li class="share-button">
                        <a target="_blank" href={`${data.instagram}`} ><i class="share-button-instagram fab fa-instagram"></i></a>
                    </li>
                    <li class="share-button">
                        <a target="_blank" href={`${data.linkedin}`} ><i class="share-button-linkedin fab fa-linkedin-in"></i></a>
                    </li>
                </ul>

                <div class="p-20"></div>
            </div>
        </div>
    );
}

export default Profile