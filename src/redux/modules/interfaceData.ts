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
}

export function interfaceData(state = interfaceInitialState, action: actionType) {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, data: action.payload.interfaceData };
    case 'UPDATE_DATA':
      return { ...state, data: action.payload.interfaceData };
    default:
      return state;
  }
}
