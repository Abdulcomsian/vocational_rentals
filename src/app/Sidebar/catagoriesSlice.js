const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  catagories: [],
  isLoading,
};

const catagoriesReducer = function (state = initialState, action) {
  switch (action.type) {
    case "cataories/loading":
      return {
        ...state,
        isLoading: true,
      };
    case "catagories/getCatagories":
      return {
        ...state,
        catagories: action.payload,
      };

    default:
      return state;
  }
};

function getCatagories() {
  return function (dispatch, getState) {};
}
