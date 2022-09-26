const interfaceInitialState = {
  data: {
    hero: 'Altatech Soluções em tecnologia',
    beckup1Header: 'Backup em nuvem Corporativo',
    beckupBody: 'Uma solução de segurança avançada e econômica para seus dados',
    beckup1Header2: 'Backup em nuvem: Segurança avançada para seus Dados',
    beckupBody2: 'com a Criptografia de ponta a ponta os dados de sua empresa estarão sempre em segurança',
    serverHeader: 'Backup em nuvem: Segurança avançada para seus Dados',
    serverBody: `Nosso server Cloud dispõe de segurança
    para sua aplicação e performance.
    Com preços previsíveis e escalabilidade para
    suportar seu crescimento em qualquer estágio.`,
  },
  parceiros: [
    { name: 'Parceiro 1', image: 'https://altatech.com.br/thumb/parceiro/3/130/100/56becc0545f9ec0e851870db7cda1ec5.png', url: '' },
    { name: 'Parceiro 2', image: 'https://altatech.com.br/thumb/parceiro/3/130/100/38dc4dc9fecc5bfa8511b089b5d7d60d.png', url: '' },
    { name: 'Parceiro 3', image: 'https://altatech.com.br/thumb/parceiro/3/130/100/ef888daa64bd27298a2bcb0184ad1b05.png', url: '' },
    { name: 'Parceiro 4', image: 'https://altatech.com.br/thumb/parceiro/3/130/100/36f0ca641347bdff3d875a3891a61ec1.png', url: '' },
    { name: 'Parceiro 5', image: 'https://altatech.com.br/thumb/parceiro/3/130/100/7b8e3f6a39aa16c0aa11a03b870f1cd2.png', url: '' },
    { name: 'Parceiro 6', image: 'https://altatech.com.br/thumb/parceiro/3/130/100/7b8e3f6a39aa16c0aa11a03b870f1cd2.png', url: '' },
    { name: 'Parceiro 7', image: 'https://altatech.com.br/thumb/parceiro/3/130/100/42ea6917faaf93a01ccd0dd240de098c.png', url: '' },
    { name: 'Parceiro 6', image: 'https://altatech.com.br/thumb/parceiro/3/130/100/10ce6eca4b95626888e72ab8773dd615.png', url: '' },
    { name: 'Parceiro 7', image: 'https://altatech.com.br/thumb/parceiro/3/130/100/c61c9119e688342edb78b35ba8e6a96c.png', url: '' },
    { name: 'Parceiro 8', image: 'https://altatech.com.br/thumb/parceiro/3/130/100/18e00fa21512a3aac30d569415f9e550.png', url: '' },
    { name: 'Parceiro 10', image: 'https://altatech.com.br/thumb/parceiro/3/130/100/9b22c203326020227017829bd1311d2d.png', url: '' },
  ],
  isEdit: false,
};

interface actionType {
  type: string,
  payload: {
    interfaceData: {
      beckup1Header: string,
      beckupBody: string,
      beckup1Header2: string,
      beckupBody2: string,
    }
  }
  parceiros: []
}

export function interfaceData(state = interfaceInitialState, action: actionType) {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, data: action.payload.interfaceData };
    case 'UPDATE_DATA':
      return { ...state, data: action.payload.interfaceData };
    case 'UPDATE_PARCEIROS':
      return { ...state, parceiros: action.parceiros };
    case 'HANDLE_EDIT':
      return { ...state, isEdit: !state.isEdit };
    default:
      return state;
  }
}
