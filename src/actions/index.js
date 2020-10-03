export const getSearchData = (searchTerm) => ({
  type: 'GET_SEARCH_DATA',
  payload: { searchValue: searchTerm }
});

