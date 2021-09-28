import { TOGGLE_PLAYER_FETCHING_STATE, GET_PLAYER } from "../actionTypes";
import axios from "axios";

export const playersAction = () => async (dispatch) =>{
  try {
    //   dispatch({type: GET_PLAYER, payload: null})
      dispatch({type: TOGGLE_PLAYER_FETCHING_STATE})
    const res = await axios(
        "https://api.npoint.io/20c1afef1661881ddc9c",
        {
      method: "GET"
    });
    // var res = Object.keys(data).map((key) => [Number(key), data[key]]);
    function sortValue(a, b) {
        return a.age - b.age;
    }
    // const playerData = res.data.playerList
    // console.log(playerData.reverse());
    // console.log("res", playerData)
    dispatch({type: GET_PLAYER, payload: res.data})
  } catch (error) {
    console.error("error");
  }finally {
    dispatch({ type: TOGGLE_PLAYER_FETCHING_STATE });
  }
    
}