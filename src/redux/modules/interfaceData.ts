const interfaceInitialState = {
  data: {
    hero: 'Altatech Soluções em tecnologia',
    beckup1Header: 'Backup em nuvem Corporativo',
    beckupBody: 'Uma solução de segurança avançada e econômica para seus dados',
    beckup1Header2: 'Backup em nuvem: Segurança avançada para seus Dados',
    beckupBody2: 'com a Criptografia de ponta a ponta os dados de sua empresa estarão sempre em segurança',
  },
};

interface actionType {
  type: string,
  payload: {}
}

export function interfaceData(state = interfaceInitialState, action: actionType) {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state };
    case 'UPDATE_DATA':
      return { ...state, data: action.payload };
    default:
      return state;
  }
}
