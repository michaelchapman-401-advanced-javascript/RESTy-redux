let initialState = { url: '' };

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'SET_URL':
      console.log(payload);
      return { url: payload };

    default:
      return state;
  }
};
