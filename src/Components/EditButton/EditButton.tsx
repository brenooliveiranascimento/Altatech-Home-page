import React from 'react';
import './Editbutton.css';
import { useDispatch, useSelector } from 'react-redux';
import { isEdit } from '../../redux/actions/interfaceActions';

function EditButton() {
  const dispatch = useDispatch();
  const editVerify = useSelector(({ interfaceData }: any) => interfaceData.isEdit);
  const startEdit = () => {
    dispatch(isEdit());
  };
  return (
    <button onClick={startEdit} className="edit_button_container" type="button">
      <h1>{editVerify ? 'Cancel' : 'editar'}</h1>
    </button>
  );
}

export default EditButton;
