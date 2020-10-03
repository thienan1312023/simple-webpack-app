const reducer = (state = {}, action) => {
    switch (action.type) {
      case 'GET_SEARCH_DATA':
        return { ...state, loading: true };
      case 'DATA_RECEIVED':
        return { ...state, searchResults: action.data, loading: false }
      default:
        return state;
    }
  };
  
  export default reducer;
  