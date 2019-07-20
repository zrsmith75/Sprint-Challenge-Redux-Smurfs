/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import axios from "axios";
export const FETCH_SMURF = "FETCH_SMURF";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_ERROR = "ADD_SMURF_ERROR";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurf = smurf => dispatch => {
  dispatch({ type: FETCH_SMURF });
  const URL = "http://localhost:3345/smurfs";
  console.log(URL);

  axios
    .get(URL, smurf)
    .then(res => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: FETCH_FAILURE, payload: error });
    });
};
