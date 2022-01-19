import { useSelector } from "react-redux";

const AveragePerAssignment = (assignment, type) => {
    const data = useSelector(state => state.assignmentData)
    const filteredForAssignment = data.filter(item => item.assignment === assignment)
    if (type === "fun") {
        const funArray = filteredForAssignment.map(item => item.fun)
        const averagePerAssignment = (funArray.reduce((a, b) => a + b)) / funArray.length
        return (averagePerAssignment)
    } else if (type === "difficulty") {
        const difArray = filteredForAssignment.map(item => item.difficulty)
        const averagePerAssignment = (difArray.reduce((a, b) => a + b)) / difArray.length
        return (averagePerAssignment)
    }

}
export default AveragePerAssignment;

// const AverageFunPerAssignment = (assignment, type) => {
//     const data = useSelector(state => state.assignmentData)
//     const filteredForAssignment = data.filter(item => item.assignment === assignment)
//     const funArray = filteredForAssignment.map(item => item.fun)
//     const averagePerAssignment = (funArray.reduce((a, b) => a + b)) / funArray.length
//     return ( averagePerAssignment);
// }
// export default AverageFunPerAssignment;