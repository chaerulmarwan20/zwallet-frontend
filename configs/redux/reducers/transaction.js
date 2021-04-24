const initialState = {
  transaction: [],
  income: {},
  expense: {},
  detail: {},
  history: [],
};

const transactionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_TRANSACTION":
      return {
        ...state,
        transaction: payload,
      };
    case "GET_INCOME":
      return {
        ...state,
        income: payload,
      };
    case "GET_EXPENSE":
      return {
        ...state,
        expense: payload,
      };
    case "GET_DETAIL":
      return {
        ...state,
        detail: payload,
      };
    case "GET_HISTORY":
      return {
        ...state,
        history: payload,
      };
    default:
      return state;
  }
};

export default transactionReducer;
