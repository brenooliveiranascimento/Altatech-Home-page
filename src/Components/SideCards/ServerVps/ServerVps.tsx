import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import './ServerVps.css';
import { useSelector, useDispatch } from 'react-redux';
import beckup2 from '../../../lottie/cloud.json';
import { updateInterface } from '../../../redux/actions/interfaceActions';

function ServerVps() {
  const serverHeader = useSelector(({ interfaceData }: any) => interfaceData.data.serverHeader);
  const serverBody = useSelector(({ interfaceData }: any) => interfaceData.data.serverBody);

  const defaultOptionsLoading: any = {
    loop: true,
    autoplay: true,
    animationData: beckup2,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const dispatch = useDispatch();

  const [editInf, setEditInf] = useState('');
  const [editInf1, setEditInf1] = useState('');
  const editVerify = useSelector(({ interfaceData }: any) => interfaceData.isEdit);
  const [showLogo, setShowLogo] = useState(false);

  const saveEdit = () => {
    dispatch(updateInterface(editInf, 'serverHeader'));
  };

  const saveEdit1 = () => {
    dispatch(updateInterface(editInf1, 'serverBody'));
  };

  useEffect(() => {
    setEditInf(serverHeader);
    setEditInf1(serverBody);
  }, []);
  return (
    <section className="server_container">
      <section className="server_image_container">
        <section className="server_image_darkness">
          <section className="server_inf_area">
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
                  <button className="btn_edit_inf" onClick={saveEdit} type="button">
                    salvar
                  </button>
                </section>
              ) : (
                <h1>{serverHeader}</h1>
              )
            }
            <section className="animated_logo">
              <Lottie
                style={{
                  alignSelf: 'flex-end',
                  justifyContent: 'center',
                }}
                options={defaultOptionsLoading}
              />
            </section>
          </section>
          <section className="server_vps_dark_side">
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
                  <button className="btn_edit_inf" onClick={saveEdit1} type="button">
                    salvar
                  </button>
                </section>
              ) : (
                <span>
                  {serverBody}
                </span>
              )
            }

            <button
              type="button"
              className="action_btn"
            >
              Confira Aqui
            </button>
          </section>
        </section>
      </section>
      <section className="server_container_white" />
      <section className="server_container_brighness" />
    </section>
  );
}

export default ServerVps;
