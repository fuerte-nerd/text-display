import { UPDATE_TEXT } from "../actionTypes";

const initialState = {
  displayText: "Hello World!"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEXT: {
      const { text } = action.payload;
      return {
        ...state,
        displayText: text
      };
    }
    default:
      return state;
  }
};
