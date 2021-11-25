import React from 'react'

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //state properties here
        };
    }
    render() {
        return (
            <div class="section-container" id="gallery-section">
                <h2 class="section-header">Gallery</h2>
                <div class="p-10"></div>
                <div class="images-container">
                    <div class="image-wrapper">
                        <img onclick="" alt="Image 1" src="https://vcard-bucket.s3.us-east-2.amazonaws.com/link-connect-1/1585897338569.jpeg" style={{ width: '100%' }} />
                    </div>
                    <div class="image-wrapper">
                        <img onclick="" alt="Image 2" src="https://vcard-bucket.s3.us-east-2.amazonaws.com/link-connect-1/1585897338570.png" style={{ width: '100%' }} />
                    </div>
                    <div class="image-wrapper">
                        <img onclick="" alt="Image 3" src="https://vcard-bucket.s3.us-east-2.amazonaws.com/link-connect-1/1585897338571.png" style={{ width: '100%' }} />
                    </div>
                    <div class="image-wrapper">
                        <img onclick="" alt="Image 4" src="https://vcard-bucket.s3.us-east-2.amazonaws.com/link-connect-1/1585897338572.jpeg" style={{ width: '100%' }} />
                    </div>
                    <div class="image-wrapper">
                        <img onclick="" alt="Image 5" src="https://vcard-bucket.s3.us-east-2.amazonaws.com/link-connect-1/1585897348868.jpeg" style={{ width: '100%' }} />
                    </div>


                </div>
                <div class="section-close"></div>
            </div>
        )
    }
}