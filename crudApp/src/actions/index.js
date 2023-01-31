import { USER } from "../ActionConstants"

//I have added four actions which is used for defining what actions we can take on performing operations on our Employees state.

const addEmp = (obj) => (
  {
    type: USER.ADD,
    payload: obj,
  }
)
const editEmp = (obj) => (
  {
    type: USER.EDIT,
    payload: obj,
  }
)
const deleteEmp = (index) => (
  {
    type: USER.DELETE,
    payload: index
  }
)
const getEmp = (employees) => (
  {
    type: USER.GET,
    payload: employees
  }
)

export { addEmp, editEmp, deleteEmp, getEmp };
