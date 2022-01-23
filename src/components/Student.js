import React from "react";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import CreateStudentArray from "../Calculators/CreateStudentArray";
import MainChart from "./MainChart";
import Sidebar from "./Sidebar";

const Student = () => {
    const { id } = useParams()
    const studData = useSelector(state => state.students[id - 1])
    const studArray = CreateStudentArray(id)
    const half = Math.ceil(studArray.length / 2)
    const firstHalf = studArray.splice(0, half)
    const secondHalf = studArray.splice(-half)
    return (
        <div className="student">
            <div className="student-container">
                <div className="student-item">
                    <img alt="student" className="student-photo" src={studData.photoURL}></img>
                </div>
                <div className="student-item">
                    <h1>{studData.firstName} {studData.lastName}</h1>
                    <p>Age: {studData.age}</p>
                    <p>Email: {studData.email}</p>
                    <p>Phone: {studData.phoneNumber}</p>
                </div>
            </div>
            <MainChart firstHalf={firstHalf} secondHalf={secondHalf} />
            <Sidebar />
        </div>
    );
}

export default Student;