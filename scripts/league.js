async function buscarCampeoes() {
    const response = await fetch('lol.json');
    const data = await response.json();
    return data;
  }
  
  function formatarDadosChampions(dados, nomeCampeao) {
    const championData = dados.data[nomeCampeao];
  
    return {
      name: championData.name,
      title: championData.title,
      stats: {
        attack: championData.info.attack,
        defense: championData.info.defense,
        magic: championData.info.magic,
        difficulty: championData.info.difficulty,
        // ... adicione outras estatísticas conforme necessário
      },
      // ... adicione outras propriedades conforme necessário
    };
  }
  
  export { buscarCampeoes, formatarDadosChampions };
  