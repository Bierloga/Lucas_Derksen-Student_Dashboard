import AverageDifficultyPerAssignment from "./AverageDifficultyPerAssignment";
import AverageFunPerAssignment from "./AverageFunPerAssignment";
import CreateAssignmentArray from "./CreateAssignmentArray";

const CreateAverageFunArray = () => {
    const assignmentArray = CreateAssignmentArray()
    const newArray = []
    assignmentArray.forEach(item => {
        const newItem = { assignment: item, averageFun: AverageFunPerAssignment(item)}
        newArray.push(newItem)
    })
    console.log(newArray)
    return (newArray);
}

export default CreateAverageFunArray;