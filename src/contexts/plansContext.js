import { createContext, useReducer, useEffect, useContext } from "react";

const plansContext = createContext();

const initialState = {};

const reducer = function (state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };

    case "plans/loaded":
      return {
        ...state,
        isLoading: false,
        plans: action.payload,
      };
    default:
      throw new Error("Unknown Action");
  }
};

function PlansProvider({ children }) {
  const [{ plans, isLoading }, dispatch] = useReducer(reducer, initialState);

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  useEffect(function () {
    fetch("https://admin.vacationrentals.tools/api/plans", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const convertedData = JSON.parse(result);
        dispatch({ type: "plans/loaded", payload: convertedData.plans });
        console.log("PLAN CONTEXT", convertedData.plans);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <plansContext.Provider value={{ plans, isLoading }}>
      {children}
    </plansContext.Provider>
  );
}

function usePlans() {
  const context = useContext(plansContext);

  if (context === undefined)
    throw new Error("PlansContext was used outside the provider");

  return context;
}

export { PlansProvider, usePlans };
