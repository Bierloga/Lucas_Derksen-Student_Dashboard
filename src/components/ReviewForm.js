import React, { useState } from "react";
import { useDispatch } from "react-redux";

const ReviewForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Add a review about this page!</h2>
            <div>
                <form 
                    onSubmit={(e) => {
                        e.preventDefault()
                        dispatch({ type: 'ADD_REVIEW', payload: { name: name, email: email, body: body } })
                        setName("")
                        setEmail("")
                        setBody("")
                        }
                    }>
                    <label>Name:</label>
                    <input
                        type="text"
                        id="name-input"
                        required
                        value={name}
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        id="email-input"
                        required
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea
                        placeholder="Write your review here"
                        id="review-input"
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}></textarea>
                    <button
                        type="submit"
                        >Add Review!
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ReviewForm;