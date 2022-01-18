import { useSelector } from 'react-redux'

const CreateAssignmentArray = () => {
    const data = useSelector(state => state.assignmentData)
    const newArray = data.map(item => item.assignment)
    const fixedArray = [];
    newArray.forEach((item) => {
        if (!fixedArray.includes(item)) {
            fixedArray.push(item)
        }
    })
    return (fixedArray)
    
}
 
export default CreateAssignmentArray;