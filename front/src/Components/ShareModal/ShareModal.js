import React from 'react'

export default class ShareModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //state properties here
        };
    }
    render() {
        return (
            <>
                <div id="shareModal" class="modal share-modal"></div>
                <div class="share-form fadeInUpBig">
                    <div class="share-form-header">
                        <h3 class="share-form-header-text">Share Profile</h3>
                        <span class="close" id="shareModalClose">&times;</span>
                    </div>
                    <div class="share-form-buttons-container">
                        <p>Share my Digital vCard in your network.</p>
                        <div class="share-buttons-heading">
                            <img src="../templates/template1/tild-arrow.svg" class="share-buttons-arrow" />
                            <div class="share-buttons-heading-text">Share my Digital vCard</div>
                        </div>
                        <ul class="share-buttons">
                            <li class="share-button">
                                <a href="" target="_blank" onclick="">
                                    <i class="share-button-whatsapp fab fa-whatsapp"></i>
                                </a>
                            </li>
                            <li class="share-button">
                                <a target="_blank" href="sms:?body=http://card.linkconnect.in/link-connect-1">
                                    <i class="share-button-sms fas fa-comment-dots"></i>
                                </a>
                            </li>
                            <li class="share-button">
                                <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http://card.linkconnect.in/link-connect-1&src=sdkpreparse" class="fb-xfbml-parse-ignore">
                                    <i class="share-button-facebook fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li class="share-button">
                                <a target="_blank" href="https://twitter.com/intent/tweet?text=http://card.linkconnect.in/link-connect-1" data-size="large">
                                    <i class="share-button-twitter fab fa-twitter"></i>
                                </a>
                            </li>
                            <li class="share-button">
                                <a target="_blank" href="http://pinterest.com/pin/create/link/?url=http://card.linkconnect.in/link-connect-1">
                                    <i class="share-button-pinterest fab fa-pinterest-p"></i>
                                </a>
                            </li>
                            <li class="share-button">
                                <a target="_blank" href="mailto:?subject=Digital Card&amp;body=Check out this digital card http://card.linkconnect.in/link-connect-1.">
                                    <i class="share-button-mail fas fa-envelope"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}