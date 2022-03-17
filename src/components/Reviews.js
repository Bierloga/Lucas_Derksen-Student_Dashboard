import React from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

const Reviews = () => {
    return (
        <div className="review-main">
            <ReviewForm />
            <ReviewList />
        </div>
    );
}

export default Reviews;