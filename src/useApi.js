import { useState, useEffect } from "react";
import axios from "axios";

export const apiStates = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export const useApi = (url) => {
  const [hookState, setHookState] = useState({
    state: apiStates.LOADING,
    error: "",
    data: [],
  });

  useEffect(() => {
    const setPartData = (partialData) => {
      setHookState(
        (hookState) => (hookState = { ...hookState, ...partialData })
      );
    };

    setPartData({
      state: apiStates.LOADING,
    });

    axios
      .get(url)
      .then((res) => {
        setPartData({
          state: apiStates.SUCCESS,
          data: res.data.result.data,
        });
      })
      .catch((error) => {
        setPartData({
          state: apiStates.ERROR,
          error: "fetch failed",
        });
      });
  }, [url]);

  return hookState;
};