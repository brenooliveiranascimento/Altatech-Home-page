export const setUserDataSuccess = ({
  name, email, uid, adm,
}: any): any => ({
  type: 'SIGNIN_SUCCESS',
  payLoad: {
    name,
    email,
    uid,
    adm,
  },
});

export const setUserDataInit: any = () => ({
  type: 'SIGNIN_INIT',
});

export const setUserDataFail: any = () => ({
  type: 'SIGNIN_FAIL',
});

export const logoutUser: any = () => ({
  type: 'LOGOUT',
});

export const signinVisitant: any = () => ({
  type: 'ISVISITANT',
});
