//I have added four actions which is used for defining what actions we can take on performing operations on our Employees state.

function addEmp(id, name, age) {
  return {
    type: "ADD",
    payloadId: id,
    payloadName: name,
    payloadAge: age
  };
}
function editEmp(index, name, age) {
  return {
    type: "EDIT",
    payloadIndex: index,
    payloadName: name,
    payloadAge: age
  };
}
function deleteEmp(index) {
  return {
    type: "DELETE",
    payloadIndex: index
  };
}
function getEmp(employees) {
  return {
    type: "GET",
    payload: employees
  };
}

export { addEmp, editEmp, deleteEmp, getEmp };
