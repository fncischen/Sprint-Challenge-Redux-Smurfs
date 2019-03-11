
import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const addSmurf = "addSmurf";
export const getSmurfs = "getSmurfs";

export const FETCHING = "FETCHING";
export const FAILURE = "FAILURE";

export const updateSmurf = "updateSmurf";
export const deleteSmurf = "deleteSmurf";

export const addingSmurf = (data) => dispatch => {
  axios.post('http://localhost:3333/smurfs', data)
    .then(function(res){
      console.log("Adding!", res.data);
      return dispatch(
        {type: addSmurf,
        payload: res.data})
    })
    .catch(err => console.log(err));
}

export const gettingSmurfs = () => dispatch => {
  dispatch({type: FETCHING})
  axios.get('http://localhost:3333/smurfs')
    .then(function(res) {
      console.log("This res data:",res.data);
       return dispatch({type: getSmurfs, payload: res.data});
    }
      )
    .catch(err => dispatch({type: FAILURE, error: err}));
}

export const deletingSmurf = (id) => dispatch => {
  axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(function(res){
      console.log("Delete:", res)
      return dispatch({type: deleteSmurf, payload: res.data})
  })
  .catch(err => console.log(err));
}

// export const updatingSmurfs = (id, data) => {
//   axios.put(`/smurfs/${id}`, data)
//     .then()
//     .catch(err => console.log(err));
// }

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
