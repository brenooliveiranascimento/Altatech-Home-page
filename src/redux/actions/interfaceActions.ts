import { Dispatch } from 'react';
import { requestInterfaceData } from '../../services/requestData/reuqestData';

const updateInterfaceData = (data: any, type: string) => ({
  type,
  payload: data,
});

export const requestIterfaceInDatabase = (): any => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const interfaceData = await requestInterfaceData();
      console.log(interfaceData);
      dispatch(updateInterfaceData(interfaceData, 'FETCH_DATA'));
    } catch (error: any) {
      console.log(error.message);
    }
  };
};
