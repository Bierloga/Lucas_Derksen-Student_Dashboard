import AverageDifficultyPerAssignment from "./AverageDifficultyPerAssignment";
import CreateAssignmentArray from "./CreateAssignmentArray";

const CreateAverageDifficultyArray = () => {
    const assignmentArray = CreateAssignmentArray()
    const newArray = []
    assignmentArray.forEach(item => {
        const newItem = { assignment: item, averageDifficulty: AverageDifficultyPerAssignment(item) }
        newArray.push(newItem)
    })
    return (newArray);
}

export default CreateAverageDifficultyArray;