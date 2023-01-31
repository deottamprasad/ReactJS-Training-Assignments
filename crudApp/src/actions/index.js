//I have added four actions which is used for defining what actions we can take on performing operations on our Employees state.

const addEmp = (id, name, age) => (
  {
    type: "ADD",
    payloadId: id,
    payloadName: name,
    payloadAge: age
  }
)
const editEmp = (index, name, age) => (
  {
    type: "EDIT",
    payloadIndex: index,
    payloadName: name,
    payloadAge: age
  }
)
const deleteEmp = (index) => (
  {
    type: "DELETE",
    payloadIndex: index
  }
)
const getEmp = (employees) => (
  {
    type: "GET",
    payload: employees
  }
)

export { addEmp, editEmp, deleteEmp, getEmp };
