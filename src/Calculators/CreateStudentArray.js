// import CreateAssignmentArray from "./CreateAssignmentArray";
import { useSelector } from "react-redux";

const CreateStudentArray = (id) => {
    const data = useSelector(state => state)
    const studentName = data.students[id-1].firstName
    const studData = data.assignmentData.filter(item => item.student === studentName)
    const studArray = studData.map(item => {
        return {
            assignment: item.assignment,
            fun: item.fun,
            difficulty: item.difficulty
        }
    })
    return studArray
}
 
export default CreateStudentArray;