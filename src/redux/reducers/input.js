import { UPDATE_INPUT } from "../actionTypes";

const initialState = {
  inputText: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INPUT: {
      const { text } = action.payload;
      return {
        inputText: text
      };
    }

    default:
      return state;
  }
};
