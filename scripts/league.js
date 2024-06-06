async function buscarCampeoes() {
  try {
    const response = await fetch('./dragonTail/14.11.1/data/pt_BR/championFull.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar dados dos campeões:', error);
    // Exibir mensagem de erro para o usuário (opcional)
  }
}

function obterDadosHabilidades(spells, tipoDado) {
  const dadosHabilidades = [];

  for (const habilidade of spells) {
    dadosHabilidades.push(tipoDado === 'id' ? habilidade.id : habilidade.name);
  }
  return dadosHabilidades;
}



function formatarDadosChampionsAleatorio(dados) {
  const championAleatorio = Object.keys(dados.data)[Math.floor(Math.random() * Object.keys(dados.data).length)];
  const skinAleatoria = Object.keys(championAleatorio.skins)[Math.floor(Math.random() * Object.keys(championAleatorio.skins).length)];

  const nomesHabilidades = obterDadosHabilidades(championAleatorio.spells, 'name');
  const imagensHabilidades = obterDadosHabilidades(championAleatorio.spells, 'id');

  return {
    imagem: skinAleatoria.num,
    nome: championAleatorio.id,
    nameSkin: skinAleatoria.name,
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
      historia: championAleatorio.lore.biography.content,
      dicas: championAleatorio.allytips,
    },
  };
}

export { buscarCampeoes, formatarDadosChampionsAleatorio };
