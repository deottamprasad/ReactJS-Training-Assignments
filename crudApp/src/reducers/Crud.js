//A single reducer changeTheState which defines how to perform actions based on the action type.

const initialState = [{
  id:"",
  Name:"",
  Age:"",
}];

const changeTheState = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.payloadId,
          Name: action.payloadName,
          Age: action.payloadAge
        }
      ];
    case "EDIT": {
      [...state][action.payloadIndex].Name = action.payloadName;
      [...state][action.payloadIndex].Age = action.payloadAge;
      return state;
    }
    case "DELETE": {
      [...state].splice(action.payloadIndex, 1);
      return state;
    }
    case "GET": {
      return [...state, ...action.payload];
    }
    default:
      return state;
  }
};

export default changeTheState;
