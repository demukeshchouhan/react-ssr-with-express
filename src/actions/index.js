export const FETCH_USERS = "FETCH_USERS";
export const fetchUsers = () => async (dispatch, getState, axios) => {
  const res = await axios.get("http://react-ssr-api.herokuapp.com/users/xss");

  dispatch({ type: FETCH_USERS, payload: res.data });
};
