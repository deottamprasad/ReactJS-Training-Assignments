import { USER } from "../ActionConstants";

//A single reducer changeTheState which defines how to perform actions based on the action type.

const initialState = [{
  id:"",
  Name:"",
  Age:"",
}];

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER.ADD:
      const {id,name,age} = action.payload;
      return [
        ...state,
        {
          id: id,
          Name: name,
          Age: age,
        }
      ];
    case USER.EDIT: {
      const {index,name,age} = action.payload;
      [...state][index].Name = name;
      [...state][index].Age = age;
      return state;
    }
    case USER.DELETE: {
      [...state].splice(action.payload, 1);
      return state;
    }
    case USER.GET: {
      return [...state, ...action.payload];
    }
    default:
      return state;
  }
};

export default employeeReducer;
