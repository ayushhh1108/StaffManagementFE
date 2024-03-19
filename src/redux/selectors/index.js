export const actionLoaderSelector =
  (action) =>
  ({ actionLoaderReducer: { actionLoading = {} } = {} }) =>
    actionLoading[action];
