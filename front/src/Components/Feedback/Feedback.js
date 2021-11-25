import React, { useState } from 'react'
import { useHttpClient } from '../../shared/hooks/http-hook';

const Feedback = ({ data, setData }) => {

    const [feedback, setFeedback] = useState()

    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const uploadHandler = async () => {

        const responseData = await sendRequest(
            process.env.REACT_APP_BACKEND_URL + '/addFeedback',
            'POST',
            JSON.stringify({
                loginEmail: data.loginEmail,
                feedback
            }),
            {
                'Content-Type': 'application/json',
            }
        );

        const feedbacks = [...data.feedbacks]
        feedbacks.push(feedback)

        setData(oldData => {

            const finalData = {
                ...oldData,
                feedbacks
            }

            localStorage.setItem('data', JSON.stringify(finalData))

            console.log(finalData)
            return finalData
        })


    }

    return (
        <div class="section-container" id="feedback-section">
            <h2 class="section-header">Feedbacks</h2>

            {data.feedbacks.map(fb => {
                return (
                    <div className="card" key={fb.name}>
                        <h3 class="card-title">{fb.rating}</h3>
                        <div>{fb.name}</div>
                        <div>{fb.feedback}</div>
                    </div>
                )
            })}


            {!data.public &&
                <><div class="feedback-list" id="feedback-list"></div><form class="feedback-form card" novalidate>
                    <div class="feedback-form-heading">Give Feedback</div>
                    <select class="star-rating" id="rating" name="rating"
                        onChange={(e) => setFeedback(prevState => { return { ...prevState, rating: e.target.value }; })}>
                        <option value="">Select a rating</option>
                        <option value="Excellent">Excellent</option>
                        <option value="Very Good">Very Good</option>
                        <option value="Average">Average</option>
                        <option value="Poor">Poor</option>
                        <option value="Terrible">Terrible</option>
                    </select>


                    <input type="text" name="feedbackName" id="feedbackName" placeholder="Enter Full Name" onChange={(e) => setFeedback(prevState => { return { ...prevState, name: e.target.value }; })} />

                    <textarea name="feedback" id="feedback" placeholder="Enter your feedback"
                        onChange={(e) => setFeedback(prevState => { return { ...prevState, feedback: e.target.value }; })}></textarea>

                    {/* <!-- Message:<br/> --> */}
                    <input type="button" value="Give Feedback" onClick={uploadHandler} />
                </form></>}
        </div>
    )
}

export default Feedback