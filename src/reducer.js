//thuis is the initial statw of the datalayer
export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //   //remove after developing
 // token: "BQCyc7y1UkrUveqESWH2STthBBcee-OxFkkkUelQpT7jC15pscvlXZgFjmOC3en9FAy75XiQ4FGGA1BJos1KP4ySG1b1q8xEuS-0M8tUu6QJhO07wlCktUeRXAlob6zcK9enjNcGt4QQexETMHI9eoiT58dAQjnyolXtQcIJIHsinpzY",
};
//this is used to take changes when any valid actoin like set user take place

const reducer = (state, action) => {
  console.log(action);
  //ACTION 2 types => type,payload

  switch (action.type) {
    case "SET_USER":
      return {
        ...state, //to keep whatever that is in the currennt state only update which have action
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return{
        ...state,
        discover_weekly:action.discover_weekly
      }

    default:
      return state;
  }
};

export default reducer;
