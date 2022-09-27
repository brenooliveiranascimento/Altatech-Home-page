const userInitialState = {
  user: {
    name: '',
    email: '',
    amd: false,
    uid: '',
  },
  loged: false,
};

export function userData(state = userInitialState, action:any) {
  switch (action.type) {
    case 'SIGNIN_SUCCESS':
      return { ...state, loged: true, user: action.payLoad };
    case 'SIGOUT_USER':
      return {
        ...state,
        loged: false,
        user: {
          name: '',
          email: '',
          amd: false,
          uid: '',
        },
      };
    default:
      return state;
  }
}
