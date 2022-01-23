import React from "react";
import MainChart from "./MainChart";
import StudentOverview from "./StudentOverview"
import CreateAverageArray from "../Calculators/CreateAverageArray";
import Sidebar from "./Sidebar";

const Main = () => {
    const rawData = CreateAverageArray()
    const half = Math.ceil(rawData.length / 2)
    const firstHalf = rawData.splice(0, half)
    const secondHalf = rawData.splice(-half)
    return (
        <div className="main-container">
            <StudentOverview />
            <MainChart firstHalf={firstHalf} secondHalf={secondHalf} />
            <Sidebar />
        </div>
    );
}

export default Main;