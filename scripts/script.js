import { getChampionData, formatarDadosChampions } from './league.js';


const botaoCard = document.querySelector("#botaoCard")




botaoCard.addEventListener("click", function (event) {
  event.preventDefault();
  cliqueiNoBotao();
})

function cliqueiNoBotao() {
  ResetarCarta();
}


async function ResetarCarta() {
  //exibir o loading
  document.getElementById("loading").classList.add("loader");
  try {
    const dados = await getChampionData();
    const data = formatarDadosChampions(dados);
    console.log(data);
    // Remover o loading 
    setTimeout(() => {
      document.getElementById("loading").classList.remove("loader");
    }, 215);
    setTimeout(() => {
      colocarDadosNaTela(data);
    }, 216);

  } catch (error) {
    console.error("Erro:", error);
  }
}



async function colocarDadosNaTela(data) {
  const response = await data; // Utilize await para esperar a Promise ser resolvida
  const name = response.name;
  console.log(name);
  const skins = response.skins;
  const totalSkins = skins.length;
  const indiceAleatorio = Math.floor(Math.random() * totalSkins);
  const skinSorteada = skins[indiceAleatorio];
  console.log(skinSorteada);
  const numSkin = skinSorteada.num;
  console.log(numSkin);
  const src = `dragonTail/img/champion/loading/${name}_${numSkin}.jpg`
  function definenome() {
    if (numSkin == 0) {
      return name;
    } else {
      return skinSorteada.name;
    }
  }
  const nome = definenome();



  document.querySelector(".imagem").src = src;
  document.querySelector(".nome").innerHTML = nome;
  document.querySelector("#sk0").src = `dragonTail/14.11.1/img/passive/${name}_Passive.png`;
  document.querySelector("#sk1").src = `dragonTail/14.11.1/img/spell/${name}Q.png`;
  document.querySelector("#sk2").src = `dragonTail/14.11.1/img/spell/${name}W.png`;
  document.querySelector("#sk3").src = `dragonTail/14.11.1/img/spell/${name}E.png`;
  document.querySelector("#sk4").src = `dragonTail/14.11.1/img/spell/${name}R.png`
}




