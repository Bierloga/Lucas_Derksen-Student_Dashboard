import React from "react";
import { useSelector, useDispatch } from "react-redux";


const ReviewList = () => {
    const reviewData = useSelector(state => state.reviews)
    const dispatch = useDispatch()
    const handleDelete = (e, id) => {
        e.preventDefault()
        dispatch({ type: "DELETE_REVIEW", payload: id })
    }
    const listReviews = reviewData.map(item => {
        return (
            <li key={item.id}>
                <h3>{item.name}</h3>
                <h3>{item.email}</h3>
                <p>{item.body}</p>
                {item.canEdit && <button onClick={(e)=> handleDelete(e, item.id)}>Delete</button>}
            </li>
        )
    })

    return (
        <div>
            {listReviews}
        </div>
    );
}

export default ReviewList;