import { UPDATE_TEXT, UPDATE_INPUT } from "./actionTypes";

export const updateText = text => dispatch => {
  dispatch({
    type: UPDATE_TEXT,
    payload: {
      text
    }
  });
  return Promise.resolve();
};

export const updateInput = text => dispatch => {
  dispatch({
    type: UPDATE_INPUT,
    payload: {
      text: text
    }
  });
  return Promise.resolve();
};
