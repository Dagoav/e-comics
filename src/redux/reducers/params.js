const initialState = {
  theme_params: {
    theme: "light",
    state: false
  },
};


const params = (state = initialState, action) => {
  switch (action.type) {

    case "SET_THEME":
      return {
        ...state,
        theme_params: action.payload,
      }

    default: return state
  };
};

export default params;