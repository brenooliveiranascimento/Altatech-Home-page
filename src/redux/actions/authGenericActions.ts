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

export const setUserDataFail: any = () => ({
  type: 'SIGNIN_FAIL',
});

export const resetUserInf: any = () => ({
  type: 'SIGOUT_USER',
});
