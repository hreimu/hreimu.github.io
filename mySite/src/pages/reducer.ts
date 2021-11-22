export const reducer = (state?: any, action?: any) => {
  switch (action.type) {
    case 'push':
      return {
        ...state,
        path:action.path
      }
  }
}
