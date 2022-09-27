import React, { useEffect, useState } from 'react';
import './ServicesInf.css';
import Lottie from 'react-lottie';
import { useSelector, useDispatch } from 'react-redux';
import beckup2 from '../../../lottie/beckup2.json';
import { updateInterface } from '../../../redux/actions/interfaceActions';

export default function CloudBeckup() {
  const beckupHeader = useSelector(({ interfaceData }: any) => interfaceData.data.beckup1Header2);
  const beckupBody = useSelector(({ interfaceData }: any) => interfaceData.data.beckupBody2);
  const dispatch = useDispatch();
  const [editInf, setEditInf] = useState('');
  const [editInf1, setEditInf1] = useState('');
  const beckup1Header = useSelector(({ interfaceData }: any) => interfaceData.data.beckup1Header2);
  const editVerify = useSelector(({ interfaceData }: any) => interfaceData.isEdit);

  const saveEdit = () => {
    dispatch(updateInterface(editInf1, 'beckupBody2'));
  };

  const saveEdit1 = () => {
    dispatch(updateInterface(editInf, 'beckup1Header2'));
  };

  useEffect(() => {
    setEditInf(beckup1Header);
    setEditInf1(beckupBody);
  }, []);

  const defaultOptionsLoading: any = {
    loop: true,
    autoplay: true,
    animationData: beckup2,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <section className="beckups_area">
      <section className="beckups_brightness">
        {
          editVerify ? (
            <section>
              <input
                onChange={({ target }: any) => {
                  setEditInf(target.value);
                }}
                className="edit_input"
                value={editInf}
              />
              <button className="btn_edit_inf" onClick={saveEdit1} type="button">
                salvar
              </button>
            </section>
          ) : (
            <span>{beckup1Header}</span>
          )
        }
        <section className="inf_area">
          <section className="ing_content">
            {
              editVerify ? (
                <section>
                  <input
                    onChange={({ target }: any) => {
                      setEditInf1(target.value);
                    }}
                    className="edit_input"
                    value={editInf1}
                  />
                  <button
                    style={{
                      width: 'auto',
                      fontSize: '1.3rem',
                      height: '2rem',
                      backgroundColor: 'black',
                    }}
                    className="btn_edit_inf"
                    onClick={saveEdit}
                    type="button"
                  >
                    salvar
                  </button>
                </section>
              ) : (
                <p>
                  {beckupBody}
                </p>
              )
            }

            <button
              className="button_confere"
              type="button"
            >
              <h1>Confira aqui!</h1>
            </button>
          </section>
          <Lottie
            style={{
              alignSelf: 'flex-end',
              justifyContent: 'center',
              width: 220,
              height: 350,
            }}
            options={defaultOptionsLoading}
          />
        </section>
      </section>
    </section>
  );
}
