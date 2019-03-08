/*
  Be sure to import in all of the action types from `../actions`
*/

import {addSmurf, getSmurfs, updateSmurf, deleteSmurf} from "../actions";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
*/
 
const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
}

export const smurfReducer = (state = initialState, action) => {
  console.log("Action:", action)
  switch(action.type) {
    case addSmurf:
      return {... state, smurfs: action.payload, addingSmurf: true}
    case getSmurfs:
      return {... state, smurfs: action.payload, fetchingSmurfs: true}
    case updateSmurf:
      return {... state, smurfs: action.payload, updatingSmurf: true}
    case deleteSmurf:
      return {... state, smurfs: action.payload, deletingSmurf: true}
    default:
      return state;
  }
}
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
