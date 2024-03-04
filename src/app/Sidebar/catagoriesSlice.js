"use client";
import { BASE_URL } from "@/constant/utilities";

const initialState = {
  catagories: [],
  isLoading: false,
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

// ACTION CREATORS

export function getCatagories() {
  return function (dispatch, getState) {
    dispatch({ type: "cataories/loading" });
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${BASE_URL}/api/show-category`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const parsedData = JSON.parse(result);
        console.log("CALLED FROM ACTION CREATOR", parsedData);

        dispatch({
          type: "catagories/getCatagories",
          payload: parsedData.data,
        });
      })
      .catch((error) => console.error(error));
  };
}

export default catagoriesReducer;
