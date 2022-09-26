const userInitialState = {
  user: {
    name: '',
    email: '',
  },
  loged: false,
};

export function userData(state = userInitialState, action:any) {
  switch (action.type) {
    case 'SIGIN_USER':
      return { ...state, loged: true, user: action.payload };
    case 'SIGout_USER':
      return { ...state, loged: false, user: userInitialState };
    default:
      return state;
  }
}
