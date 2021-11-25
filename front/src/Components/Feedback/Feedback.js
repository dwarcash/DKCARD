import React from 'react'

export default class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //state properties here
        };
    }
    render() {
        return (
            <div class="section-container" id="feedback-section">
                <h2 class="section-header">Feedbacks</h2>
                <div class="feedback-list" id="feedback-list"></div>
                <div class="feedback-button-wrapper">
                    <input type="button" value="Load more feedbacks" id="load-more-feedback-btn" />
                </div>
                <form class="feedback-form card" novalidate>
                    <div class="feedback-form-heading">Give Feedback</div>
                    <select class="star-rating" id="rating" name="rating">
                        <option value="">Select a rating</option>
                        <option value="5">Excellent</option>
                        <option value="4">Very Good</option>
                        <option value="3">Average</option>
                        <option value="2">Poor</option>
                        <option value="1">Terrible</option>
                    </select>
                    <input type="text" name="feedbackName" id="feedbackName" placeholder="Enter Full Name" />
                    <textarea name="feedback" id="feedback" placeholder="Enter your feedback"></textarea>
                    {/* <!-- Message:<br/> --> */}
                    <input type="button" value="Give Feedback" onclick="" />
                </form>
            </div>
        )
    }
}