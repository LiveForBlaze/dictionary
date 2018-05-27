let nextWordId = 0;

export const addWord = (word, trans) => {
  return {
    type: 'ADD_WORD',
    id: nextWordId++,
    word,
    trans
  };
};
/*
export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};
*/
