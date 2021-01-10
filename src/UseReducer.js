import React, { useEffect, useReducer } from "react";
import axios from "axios";
import Album from "./Album";

const initailState = {
  loading: true,
  error: "",
  album: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "fetch-success":
      return {
        loading: false,
        error: "",
        album: action.payload,
      };
    case "fetch-error":
      return {
        loading: false,
        error: "Nothing found to display",
        album: [],
      };
    default:
      return state;
  }
};

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initailState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        dispatch({ type: "fetch-success", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "fetch-error" });
      });
  }, []);

  return (
    <div>
      {state.loading
        ? "Loading"
        : state.album.map((item) => {
            return <Album key={item.id} {...item} />;
          })}
      {state.error ? state.error : null}
      <p></p>
    </div>
  );
}

export default UseReducer;
