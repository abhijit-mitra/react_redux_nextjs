export const baseReducer = {
  isFetching: false,
  data: null,
  error: null,
};

export const createReducer = (type, initialState) =>(
  {
    [`${type}_started`]: (state = initialState, {payload}) =>
      ({
        ...state,
        isFetching: true,
      }),
    [`${type}_failed`]: (state = initialState, {payload}) =>
      ({
        ...state,
        isFetching: false,
        error: payload,
      }),
    [`${type}_success`]: (state = initialState, {payload}) =>
      ({
        ...state,
        isFetching: false,
        data: payload,
      }),

  });
