const initialState = {
  users: [],
  comic_info: {},
};


const admin = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload
      }

    case "POST_COMIC":
      return {
        ...state,
        comic_info: action.payload
      }


    default: return state
  };
};

export default admin;