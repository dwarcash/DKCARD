import React from 'react'

export default class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //state properties here
        };
    }
    render() {
        return (
            <div class="section-container" id="products-services-section">
            <h2 class="section-header">Products/Services</h2>
            <div class="p-10"></div>
            <div>
                <div class="card">
                    <h3 class="card-title">Digital Visiting Card </h3>

                    <img onclick="" alt="Digital Visiting Card " src="https://vcard-bucket.s3.us-east-2.amazonaws.com/link-connect-1/1585897314636.jpeg" style={{ width: '100%', marginBottom: '15px' }} />
                    <div class="product-enquiry-section">
                        <div class="product-price">

                        </div>
                        <a href="https://wa.me/919509434880?text=Hi, I am interested in your product/service: Digital Visiting Card . Please provide more details." target="blank" class="product-enquiry-btn">Enquiry</a>
                    </div>
                </div>
                <div class="card">
                    <h3 class="card-title">Website Development </h3>

                    <img onclick="" alt="Website Development " src="https://vcard-bucket.s3.us-east-2.amazonaws.com/link-connect-1/1585897296900.png" style={{ width: '100%', marginBottom: '15px' }} />
                    <div class="product-enquiry-section">
                        <div class="product-price">

                        </div>
                        <a href="https://wa.me/919509434880?text=Hi, I am interested in your product/service: Website Development . Please provide more details." target="blank" class="product-enquiry-btn">Enquiry</a>
                    </div>
                </div>
                <div class="card">
                    <h3 class="card-title">Digital Marketing Intelligence</h3>

                    <img onclick="" alt="Digital Marketing Intelligence" src="https://vcard-bucket.s3.us-east-2.amazonaws.com/link-connect-1/1585897292483.jpeg" style={{ width: '100%', marginBottom: '15px' }} />
                    <div class="product-enquiry-section">
                        <div class="product-price">

                        </div>
                        <a href="https://wa.me/919509434880?text=Hi, I am interested in your product/service: Digital Marketing Intelligence. Please provide more details." target="blank" class="product-enquiry-btn">Enquiry</a>
                    </div>
                </div>


            </div>
            <div class="section-close"></div>

        </div>
        )
    }
}