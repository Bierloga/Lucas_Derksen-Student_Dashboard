import { useSelector } from "react-redux";

const AverageFunPerAssignment = (assignment) => {
    const data = useSelector(state => state.assignmentData)
    const filteredForAssignment = data.filter(item => item.assignment === assignment)
    const funArray = filteredForAssignment.map(item => item.fun)
    const averagePerAssignment = (funArray.reduce((a, b) => a + b)) / funArray.length
    return ( averagePerAssignment);
}
export default AverageFunPerAssignment;