export const REQUEST_API_DATA = 'REQUEST_API_DATA';
export const RECEIVE_API_DATA = 'RECEIVE_API_DATA';
// export const REQUEST_SEARCH_DATA = 'REQUEST_SEARCH_DATA';
// export const RECEIVE_SEARCH_DATA = 'RECEIVE_SEARCH_DATA';

export const requestApiData = query => ({ type: REQUEST_API_DATA, query });
export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data });
// export const requestSearchData = query => ({
//   type: REQUEST_SEARCH_DATA,
//   query
// });
// export const receiveSearchdata = data => ({ type: RECEIVE_SEARCH_DATA, data });
