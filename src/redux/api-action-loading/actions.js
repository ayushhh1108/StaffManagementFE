export const ADD_ACTION_LOADER = 'ADD_LOADER';
export const REMOVE_ACTION_LOADER = 'REMOVE_LOADER';

export const addActionLoader = (payload) => ({
  type: ADD_ACTION_LOADER,
  payload,
});

export const removeActionLoader = (payload) => ({
  type: REMOVE_ACTION_LOADER,
  payload,
});
