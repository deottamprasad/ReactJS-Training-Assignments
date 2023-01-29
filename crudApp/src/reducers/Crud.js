//A single reducer changeTheState which defines how to perform actions based on the action type.

const initialState = [];

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
      let newState = [...state];
      newState[action.payloadIndex].Name = action.payloadName;
      newState[action.payloadIndex].Age = action.payloadAge;
      return newState;
    }
    case "DELETE": {
      let newState = [...state];
      newState.splice(action.payloadIndex, 1);
      return newState;
    }
    case "GET": {
      return [...state, ...action.payload];
    }
    default:
      return state;
  }
};

export default changeTheState;
