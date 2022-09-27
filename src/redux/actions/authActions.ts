import { Dispatch } from 'react';
import { getUserInDataBase, registerUser, signInUser } from '../../services/AuthControl/AuthControl';

import {
  setUserDataFail, setUserDataInit, setUserDataSuccess,
} from './authGenericActions';

const createAccountAndData = async (userInf: any, dispatch: any) => {
  const {
    email, password, name, adm,
  } = userInf;

  dispatch(setUserDataInit());
  const fetchUserData:any = await registerUser(email, password, name, adm);
  const userData = await {
    name, password, email, uid: fetchUserData.uid,
  };
  await dispatch(setUserDataSuccess(userData));
};

const signInWithEmailAndPassword = async (email: string, password: string, dispatch: any) => {
  const fetchUserData: any = await signInUser(email, password);
  dispatch(setUserDataSuccess(await fetchUserData));
};

const signInFail = (errorMessage: string, dispatch: any) => {
  console.log(errorMessage);
  dispatch(setUserDataFail());
};

export const createUserCount = ({
  name, email, password, adm,
}: any): any => {
  return async function (dispatch: Dispatch<any>) {
    try {
      await createAccountAndData({
        name, email, password, adm,
      }, dispatch);
    } catch (error: any) {
      console.log(error.message);
      dispatch(setUserDataFail());
    }
  };
};

export const signIn = ({ email, password }: any): any => {
  return async function (dispatch: Dispatch<any>) {
    dispatch(setUserDataInit());
    try { signInWithEmailAndPassword(email, password, dispatch); } catch (error: any) {
      signInFail(error.message, dispatch);
    }
  };
};

export const signedUser = (uid: string): any => {
  return async function (dispatch: Dispatch<any>) {
    try {
      const userData: any = await getUserInDataBase(uid);
      dispatch(setUserDataSuccess(await userData.data()));
    } catch (error: any) {
      console.log(error.message);
    }
  };
};
