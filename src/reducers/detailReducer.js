const initialState = {
  game: {},
  screenShots: {},
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screenShots: action.payload.screenShots,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
