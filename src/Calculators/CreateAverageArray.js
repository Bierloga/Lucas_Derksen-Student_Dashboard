import AveragePerAssignment from "./AveragePerAssignment"
import CreateAssignmentArray from "./CreateAssignmentArray";

const CreateAverageArray = () => {
    const assignmentArray = CreateAssignmentArray()
    const newArray = []
    assignmentArray.forEach(item => {
        const newItem = {
            assignment: item,
            averageFun: AveragePerAssignment(item, "fun"),
            averageDifficulty: AveragePerAssignment(item, "difficulty")
        }
        newArray.push(newItem)
    })
    console.log(newArray)
    return (newArray);
}

export default CreateAverageArray;