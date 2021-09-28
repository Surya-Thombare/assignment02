import { TOGGLE_PLAYER_FETCHING_STATE, GET_PLAYER } from "../actionTypes";
  
  const initialState = {
    playersData: {
        playerList: [],
        teamList: []
    },
    isPlayersDataFetching: false,
  };
  
  const PlayersDataReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case GET_PLAYER:
        const playerData = payload.playerList
        console.log(playerData.reverse());
        return { ...state, playersData: {playerList: playerData, teamList: payload.teamList } };
      case TOGGLE_PLAYER_FETCHING_STATE:
        return { ...state, isPlayersDataFetching: !state.isPlayersDataFetching };
      default:
        return state;
    }
  };
  
  export default PlayersDataReducer;