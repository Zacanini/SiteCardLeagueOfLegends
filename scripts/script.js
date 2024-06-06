import { buscarCampeoes, formatarDadosChampionsAleatorio } from './league.js';

async function getAatroxData() {
    try {
        const dados = await buscarCampeoes();
        const Aatrox = formatarDadosChampionsAleatorio(dados);
        console.log(Aatrox);
    } catch (error) {
        console.error("Erro:", error); // Registre o erro no console
        // Lidar com o erro de forma adequada (por exemplo, exibir mensagem para o usuário)
    }
}

getAatroxData();