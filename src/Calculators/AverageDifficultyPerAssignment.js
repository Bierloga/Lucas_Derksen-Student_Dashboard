import { useSelector } from "react-redux";

const AverageDifficultyPerAssignment = (assignment) => {
    const data = useSelector(state => state.assignmentData)
    const filteredForAssignment = data.filter(item => item.assignment === assignment)
    const difficultyArray = filteredForAssignment.map(item => item.difficulty)
    const averagePerAssignment = (difficultyArray.reduce((a, b) => a + b)) / difficultyArray.length
    return ( averagePerAssignment);
}
export default AverageDifficultyPerAssignment;