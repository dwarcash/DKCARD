import React from 'react'

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //state properties here
        };
    }
    render() {
        return (
            <div class="footer">
                <ul class="footer-menu">
                    <li>
                        <a class="footer-menu-link" href="http://localhost:3000#home-section">
                            <i class="footer-menu-icon fas fa-home"></i>
                            <div class="footer-menu-text">HOME</div>
                        </a>
                    </li>
                    <li>
                        <a class="footer-menu-link" href="http://localhost:3000#about-us-section">
                            <i class="footer-menu-icon fas fa-briefcase"></i>
                            <div class="footer-menu-text">ABOUT US</div>
                        </a>
                    </li>
                    <li>
                        <a class="footer-menu-link" href="http://localhost:3000#products-services-section">
                            <i class="footer-menu-icon fas fa-box-open"></i>
                            <div class="footer-menu-text">PRODUCTS</div>
                        </a>
                    </li>

                    <li>
                        <a class="footer-menu-link" href="http://localhost:3000#gallery-section">
                            <i class="footer-menu-icon fas fa-file-image"></i>
                            <div class="footer-menu-text">GALLERY</div>
                        </a>
                    </li>

                    <li>
                        <a class="footer-menu-link" href="http://localhost:3000#feedback-section">
                            <i class="footer-menu-icon fas fa-star"></i>
                            <div class="footer-menu-text">FEEDBACK</div>
                        </a>
                    </li>
                    <li>
                        <a class="footer-menu-link" href="http://localhost:3000#enquiry-section">
                            <i class="footer-menu-icon fas fa-comment-alt"></i>
                            <div class="footer-menu-text">ENQUIRY</div>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}