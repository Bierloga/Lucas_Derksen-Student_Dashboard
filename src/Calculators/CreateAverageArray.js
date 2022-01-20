import AveragePerAssignment from "./AveragePerAssignment"
import CreateAssignmentArray from "./CreateAssignmentArray";

const CreateAverageArray = () => {
    const assignmentArray = CreateAssignmentArray()
    const newArray = []
    assignmentArray.forEach(item => {
        const newItem = {
            assignment: item,
            fun: AveragePerAssignment(item, "fun"),
            difficulty: AveragePerAssignment(item, "difficulty")
        }
        newArray.push(newItem)
    })
    return (newArray);
}

export default CreateAverageArray;