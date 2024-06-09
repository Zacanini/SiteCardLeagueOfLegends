async function getChampionData() {
  const response = await fetch('lol.json');
  const data = await response.json();
  return data;
}
async function getAllChampionsData() {
  const allData = await getChampionData();
  return allData;
}
async function getChampionNames() {
  const allData = await getAllChampionsData();
  const championNames = Object.keys(allData.data);
  return championNames;
}
function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}
async function getRandomChampion() {
  const championNames = await getChampionNames();
  const randomIndex = getRandomIndex(championNames.length - 1);
  const randomChampionName = championNames[randomIndex];
  return randomChampionName;
}

async function formatarDadosChampions(dados) {
  const randomChampionName = await getRandomChampion(); // Aguarda a resolução da promessa
  const championData = dados.data[randomChampionName];

  return championData;
}


export { getChampionData, formatarDadosChampions };









/*function formatarDadosChampionsAleatorio(dados) {
  const championAleatorio = obterCampeaoAleatorio()



  const nomesHabilidades = obterDadosHabilidades(championAleatorio.spells, 'name');
  const imagensHabilidades = obterDadosHabilidades(championAleatorio.spells, 'id');

  return {
    imagem: skinAleatoria.num,
    nome: championAleatorio.id,
    habilidades: [
      {
        nome: nomesHabilidades[0],
        imagem: imagensHabilidades[0],
      },
      {
        nome: nomesHabilidades[1],
        imagem: imagensHabilidades[1],
      },
      {
        nome: nomesHabilidades[2],
        imagem: imagensHabilidades[2],
      },
      {
        nome: nomesHabilidades[3],
        imagem: imagensHabilidades[3],
      },
      {
        nome: nomesHabilidades[4],
        imagem: imagensHabilidades[4],
      },
    ],
    forca: {
      ataque: championAleatorio.stats.attackdamage,
      armadura: championAleatorio.stats.armor,
      velocidadeMovimentacao: championAleatorio.stats.movespeed,
      velocidadeAtaque: championAleatorio.stats.attackspeed,
      regeneracaoVida: championAleatorio.stats.hpregen,
      vida: championAleatorio.stats.hp,
      resistenciaMagica: championAleatorio.stats.spellblock,
    },
    lore: {
      historia: championAleatorio.lore,
      dicas: championAleatorio.allytips,
    },
  };
}

export { buscarCampeoes, formatarDadosChampionsAleatorio }; */
