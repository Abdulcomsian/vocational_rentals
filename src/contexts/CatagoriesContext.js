"use client";

import { BASE_URL } from "@/constant/utilities";
import { createContext, useContext, useReducer, useEffect } from "react";

const CatagoriesContext = createContext();

const initialState = {
  catagories: [],
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "catagoriesLoading":
      return {
        ...state,
        isLoading: true,
      };

    case "catagoriesLoaded":
      return {
        ...state,
        isLoading: false,
        catagories: action.payload,
      };
    default:
      throw new Error("Unkown Action");
  }
}

function CatagoriesProvider({ children }) {
  const [{ catagories, isLoading }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const requestOptions = {
    method: "GET",
    redirect: "follow",
    header: {
      // "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  useEffect(function () {
    async function getCatagories() {
      try {
        dispatch({ type: "catagoriesLoading" });
        const resp = await fetch(
          `${BASE_URL}/api/show-category`,
          requestOptions
        );
        const data = await resp.json();
        dispatch({ type: "catagoriesLoaded", payload: data.data });
      } catch (err) {
        console.error("ERROR FROM CONTEXT", err);
      }
    }

    getCatagories();
  }, []);

  return (
    <CatagoriesContext.Provider value={{ catagories, isLoading }}>
      {children}
    </CatagoriesContext.Provider>
  );
}

function useCatagories() {
  const context = useContext(CatagoriesContext);

  if (context === undefined)
    throw new Error(
      "CatagoriesContext was called outside the CatagoryProvider"
    );

  return context;
}

export { CatagoriesProvider, useCatagories };
