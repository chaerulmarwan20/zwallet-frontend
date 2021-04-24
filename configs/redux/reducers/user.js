const initialState = {
  user: {},
  userTarget: [],
  loading: false,
  error: "",
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SIGN_UP_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "SIGN_UP_SUCCESS":
      return {
        ...state,
        user: {
          ...state.user,
          ...payload,
        },
        loading: false,
      };
    case "SIGN_UP_FAILURE":
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case "LOGIN":
      return {
        ...state,
        user: {
          ...state.user,
          ...payload,
        },
      };
    case "RESET_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "RESET_SUCCESS":
      return {
        ...state,
        loading: false,
      };
    case "RESET_FAILURE":
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case "FIND_USER":
      return {
        ...state,
        user: payload,
      };
    case "GET_USER":
      return {
        ...state,
        userTarget: payload,
      };
    case "SEARCH_USER":
      return {
        ...state,
        userTarget: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
