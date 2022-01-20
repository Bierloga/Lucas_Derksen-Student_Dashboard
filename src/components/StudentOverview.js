import React from "react";
import { useSelector } from "react-redux";

const StudentOverview = () => {
    const data = useSelector(state => state.students)
    const StudentList = data.map((person) => {
            return (
                <div key={person.studentID} className="student-overview-item">
                    <h2>{person.firstName} {person.lastName}</h2>
                    <p>Leeftijd: {person.age}</p>
                    <p>Email: {person.email}</p>
                </div>
            )
        })
    return (
        <div>
            <h1>Studenten:</h1>
            <div className="student-overview-container">
            {StudentList}
        </div>
        </div>
        
    );
}

export default StudentOverview;