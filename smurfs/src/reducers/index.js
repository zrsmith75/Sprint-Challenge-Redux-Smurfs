/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  FETCH_SMURF,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  ADD_SMURF,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE
} from "../actions";


//  Your initial/default state for this project could *Although does not have to* look a lot like this
 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }



/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
 
export const smurfReducer = (state = initialState, action) =>  {
  switch (action.type) {
    case FETCH_SMURF:
      retrun {
        
      }
      
      break;
  
    default:
      break;
  }
}