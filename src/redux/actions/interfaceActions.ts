import { Dispatch } from 'react';
import { updateInterfaceDatabase } from '../../services/interfaceDatabaseControl/interfaceDatabaseControl';
import { requestInterfaceData } from '../../services/requestData/reuqestData';

export const isEdit = () => ({
  type: 'HANDLE_EDIT',
});

const updateInterfaceData = (data: any, type: string) => ({
  type,
  payload: data,
});

export const requestIterfaceInDatabase = (): any => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const interfaceData = await requestInterfaceData();
      dispatch(updateInterfaceData(interfaceData, 'FETCH_DATA'));
    } catch (error: any) {
      console.log(error.message);
    }
  };
};

export const updateData = (inf: any) => ({
  type: 'UPDATE_DATA',
  payload: inf,
});

export const updateInterface = (data: string, name:string): any => {
  return async (dispatch: Dispatch<any>, state: any) => {
    const items = state().interfaceData.data;
    items[name] = data;
    updateInterfaceDatabase(items);
    dispatch(updateData(items));
    dispatch(isEdit());
    alert(`${name} solvo com sucesso!`);
  };
};
