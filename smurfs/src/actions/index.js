
import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const addSmurf = "addSmurf";
export const getSmurfs = "getSmurfs";
export const updateSmurf = "updateSmurf";
export const deleteSmurf = "deleteSmurf";

export const addingSmurf = (data) => {
  axios.put('/smurfs', {data})
    .then(function(res){
      return {
        type: addSmurf,
        payload: res 
      }
    })
    .catch(err => console.log(err));
}

export const gettingSmurfs = () => {
  axios.get('/smurfs')
    .then(function(res){
      return {
        type: getSmurfs,
        payload: res 
      }
    })
    .catch(err => console.log(err));
}

export const deletingSmurf = (id) => {
  axios.delete(`/smurfs/${id}`)
    .then(function(res){
      return {
        type: deleteSmurf,
        payload: res 
      }
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
