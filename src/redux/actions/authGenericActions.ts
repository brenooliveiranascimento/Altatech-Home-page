export const setExerciceProgress = ({ progress }: any): any => ({
  type: 'FETCH_PROGRESS',
  payLoad: progress,
});

export const setUserDataSuccess = ({ name, email, uid }: any): any => ({
  type: 'SIGNIN_SUCCESS',
  payLoad: {
    name,
    email,
    uid,
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
